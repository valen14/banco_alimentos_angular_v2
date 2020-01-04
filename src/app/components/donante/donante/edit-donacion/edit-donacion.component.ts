import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganizacionDonanteApi, Bulto } from 'src/app/service/lbservice';

@Component({
  selector: 'app-edit-donacion',
  templateUrl: './edit-donacion.component.html',
  styleUrls: ['./edit-donacion.component.css']
})
export class EditDonacionComponent implements OnInit {

  donacionForm:FormGroup
  emailUserLog 
  idx: string  
  bulto: Bulto
  constructor(private auth:AuthService, private donanteService:OrganizacionDonanteApi, private  router: Router, private route:ActivatedRoute) { 
    this.idx= route.snapshot.params['idx']
    this.emailUserLog= sessionStorage.getItem('email')
    donanteService.findOne({where:{email: this.emailUserLog}}).subscribe((user) => {
      donanteService.getBultos(user['id']).subscribe((bultos) => {
        this.bulto=bultos[parseInt(this.idx)]

        this.donacionForm=new FormGroup({
          descripcion: new FormControl(this.bulto['descripcion']),
          ancho: new FormControl(),
          largo: new FormControl(),
          fecha_disponibilidad: new FormControl(this.bulto['fecha_disponibilidad']),
          fecha_vencimiento: new FormControl(this.bulto['fecha_vencimiento'])
        })
      })
    })

    
  }

  ngOnInit() {
    console.log(this.emailUserLog)
    console.log(this.bulto)
  }

  onSubmit(){

    this.editarDonacion()
    this.router.navigateByUrl('donante/donaciones')
  }

  private editarDonacion(){
    const descripcionForm=this.donacionForm.get('descripcion').value
    const anchoForm= this.donacionForm.get('ancho').value
    const largoForm= this.donacionForm.get('largo').value
    const fechaDisponibilidadForm=this.donacionForm.get('fecha_disponibilidad').value
    const fechaVencimientoForm=this.donacionForm.get('fecha_vencimiento').value
    
    this.donanteService.findOne({"where": {"email": this.emailUserLog}}).subscribe((donante) => {
      console.log(donante)
      this.donanteService.getBultos(donante['id']).subscribe((bultos)=>{
        bultos[parseInt(this.idx)]['descripcion']= descripcionForm
        bultos[parseInt(this.idx)]['volumen']= [anchoForm,largoForm]
        bultos[parseInt(this.idx)]['fecha_disponibilidad']= new Date()
        bultos[parseInt(this.idx)]['fecha_vencimiento']= new Date()
  
        this.donanteService.createBultos(donante['id'],bultos).subscribe(() => {
          this.router.navigateByUrl('/donante')
        } )    
      })

    })


  }

}



