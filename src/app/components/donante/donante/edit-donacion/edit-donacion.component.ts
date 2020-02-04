import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganizacionDonanteApi, Bulto, BultoApi } from 'src/app/service/lbservice';

@Component({
  selector: 'app-edit-donacion',
  templateUrl: './edit-donacion.component.html',
  styleUrls: ['./edit-donacion.component.css']
})
export class EditDonacionComponent implements OnInit {

  donacionForm:FormGroup
  idUserLog 
  idx: string
  bultos: Bulto[]  
  
  constructor(private auth:AuthService, private donanteService:OrganizacionDonanteApi, private bultosService:BultoApi, private  router: Router, private route:ActivatedRoute) { 
    this.idx= route.snapshot.params['idx']
    const emailUserLog= sessionStorage.getItem('email')
    donanteService.findOne({where:{email: emailUserLog}}).subscribe((user) => {
      this.idUserLog=user['id']
      console.log(this.idUserLog)
      donanteService.getBultos(this.idUserLog).subscribe((bultos) => {
        this.bultos=bultos
        console.log(this.bultos)
        
      })
    })
    
    
    this.donacionForm=new FormGroup({
      descripcion: new FormControl(),
      ancho: new FormControl(),
      largo: new FormControl(),
      fecha_disponibilidad: new FormControl(),
      fecha_vencimiento: new FormControl()
    })

    
  }

  ngOnInit() {

  }

  onSubmit(){

    this.editarDonacion()
  }

  private editarDonacion(){
    const descripcionForm=this.donacionForm.get('descripcion').value
    const anchoForm= this.donacionForm.get('ancho').value
    const largoForm= this.donacionForm.get('largo').value
    const fechaDisponibilidadForm=this.donacionForm.get('fecha_disponibilidad').value
    const fechaVencimientoForm=this.donacionForm.get('fecha_vencimiento').value
    

      
    this.bultos[parseInt(this.idx)]['descripcion']= descripcionForm
    this.bultos[parseInt(this.idx)]['volumen']= [anchoForm,largoForm]
    this.bultos[parseInt(this.idx)]['fecha_disponibilidad']= new Date()
    this.bultos[parseInt(this.idx)]['fecha_vencimiento']= new Date()
  
    this.cargarBultos()

  }

  private cargarBultos(){
    this.donanteService.updateByIdBultos(this.idUserLog,this.bultos[parseInt(this.idx)]['id'],this.bultos[parseInt(this.idx)]).subscribe(() => {
     
        this.router.navigateByUrl('/donante/donaciones')
     
    }) 
  }


}



