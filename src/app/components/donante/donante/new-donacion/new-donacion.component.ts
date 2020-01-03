import { Component, OnInit } from '@angular/core';
import { OrganizacionDonanteApi, Bulto, OrganizacionDonante } from 'src/app/service/lbservice';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-donacion',
  templateUrl: './new-donacion.component.html',
  styleUrls: ['./new-donacion.component.css']
})
export class NewDonacionComponent implements OnInit {

  
  donacionForm:FormGroup
  emailUserLog 
  

  constructor(private auth:AuthService, private donanteService:OrganizacionDonanteApi, private  router: Router) { 
    this.emailUserLog= sessionStorage.getItem('email')
    this.donacionForm=new FormGroup({
      descripcion: new FormControl(),
      ancho: new FormControl(),
      largo: new FormControl(),
      fecha_disponibilidad: new FormControl(),
      fecha_vencimiento: new FormControl()
    })
    
  }

  ngOnInit() {
    console.log(this.emailUserLog)
  }

  onSubmit(){

    this.cargarDonacion()
    this.router.navigateByUrl('donante')
  }

  private cargarDonacion(){
    const descripcionForm=this.donacionForm.get('descripcion').value
    const anchoForm= this.donacionForm.get('ancho').value
    const largoForm= this.donacionForm.get('largo').value
    const fechaDisponibilidadForm=this.donacionForm.get('fecha_disponibilidad').value
    const fechaVencimientoForm=this.donacionForm.get('fecha_vencimiento').value
    const donacion = {
      descripcion: descripcionForm,
      volumen: [anchoForm,largoForm],
      fecha_disponibilidad: new Date(),
      revisado: false,
      fecha_vencimiento: new Date(),
      estado: "pendiente de retiro",

    }
    console.log(donacion)
    
    this.donanteService.findOne({"where": {"email": this.emailUserLog}}).subscribe((donante) => {
      console.log(donante)
      this.donanteService.getBultos(donante['id']).subscribe((bultos)=>{
        bultos.push(donacion)
        console.log(bultos)
        this.donanteService.createBultos(donante['id'],bultos).subscribe(() => {
          this.router.navigateByUrl('/donante')
        } )    
      })

    })


  }

}
