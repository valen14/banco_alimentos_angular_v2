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
  idUserLog 

  constructor(private auth:AuthService, private donanteService:OrganizacionDonanteApi, private  router: Router) { 
    const emailUserLog= sessionStorage.getItem('email')
    this.obtenerIdUsuarioLoguedo(emailUserLog)
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

  private obtenerIdUsuarioLoguedo(email: string){
    this.donanteService.findOne({where:{email: email}}).subscribe((user) => {
      console.log(user)
      this.idUserLog=user['id']
    })
  }

  onSubmit(){

    this.cargarDonacion()
    this.router.navigateByUrl('donante')
  }

  private cargarDonacion(){
    const donacion=this.crearDonacion()
    console.log(donacion)
    this.donanteService.getBultos(this.idUserLog).subscribe((bultos)=>{
      bultos.push(donacion)
      console.log(bultos)
      this.donanteService.createBultos(this.idUserLog,bultos).subscribe(() => {
        this.router.navigateByUrl('/donante')
      } )    
    })
  }

  private crearDonacion(){
    const descripcionForm=this.donacionForm.get('descripcion').value
    const anchoForm= this.donacionForm.get('ancho').value
    const largoForm= this.donacionForm.get('largo').value
    const fechaDisponibilidadForm=this.donacionForm.get('fecha_disponibilidad').value
    const fechaVencimientoForm=this.donacionForm.get('fecha_vencimiento').value
    return {
      descripcion: descripcionForm,
      volumen: [anchoForm,largoForm],
      fecha_disponibilidad: new Date(),
      revisado: false,
      fecha_vencimiento: new Date(),
      estado: "pendiente de retiro",
    }
  }
}
