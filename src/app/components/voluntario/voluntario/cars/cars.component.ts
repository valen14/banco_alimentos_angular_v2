import { Component, OnInit } from '@angular/core';
import { Vehiculo, VehiculoApi, VoluntarioApi, Voluntario } from 'src/app/service/lbservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  vehiculos: Vehiculo[]
  voluntario : Voluntario

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private voluntarioService: VoluntarioApi,
    private vehiculoService: VehiculoApi) {

      const email = sessionStorage.getItem("email")
      this.voluntarioService.findOne<Voluntario>({
        where: {
          email : email
        }
      }).subscribe((voluntario) => { 
        console.log(voluntario)
        this.voluntario = voluntario
        this.vehiculoService.find<Vehiculo>({
          where: {
            voluntarioId : this.voluntario.id
          }
        }).subscribe((vehiculos) => {
          console.log(vehiculos)
          this.vehiculos = vehiculos
        })
      })
    }

  ngOnInit() {
  }

  irACrearVehiculo(id) {
    console.log(id)
    this.router.navigateByUrl("voluntario/cars/nuevo/" + id)
  }

  editarVehiculo(id) {
    this.router.navigateByUrl('voluntario/cars/' + id + '/edit')
  }

  borrarVehiculo(id) {
    this.vehiculoService.deleteById<Vehiculo>(id).subscribe((veh) => {
      this.vehiculos.splice(this.vehiculos.indexOf(veh))
    })
  }

}
