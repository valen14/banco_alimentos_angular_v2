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
      auto: new FormControl(),
      camioneta: new FormControl(),
      camion: new FormControl(),
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
    this.donanteService.createBultos(this.idUserLog, donacion).subscribe((don) => {
      console.log(don)
      this.router.navigateByUrl('/donante')
    })
  }

  private crearDonacion(){
    const descripcionForm=this.donacionForm.get('descripcion').value
    const fechaDisponibilidadForm=this.donacionForm.get('fecha_disponibilidad').value
    const fechaVencimientoForm=this.donacionForm.get('fecha_vencimiento').value
    const auto= this.donacionForm.get('auto').value
    const camioneta= this.donacionForm.get('camioneta').value
    const camion= this.donacionForm.get('camion').value
    let vehiculos = []
    if(auto) {vehiculos.push("auto")}
    if(camioneta) {vehiculos.push("camioneta")}
    if(camion) {vehiculos.push("camion")}
    return {
      descripcion: descripcionForm,
      volumen:  vehiculos,
      fecha_disponibilidad: new Date(),
      revisado: false,
      fecha_vencimiento: new Date(),
      estado: "pendiente de retiro",
      estado_traslado: "sin_asignar"
    }
  }
}
