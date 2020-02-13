import { Component, OnInit } from '@angular/core';
import { EnvioApi, Envio, VoluntarioApi } from 'src/app/service/lbservice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  filter: String
  envios = []
  voluntarios = []
  envioCantidadPaq = []
  constructor(private ar: ActivatedRoute,
    private router: Router,
    private envioService: EnvioApi, private voluntarioService: VoluntarioApi) {

    this.voluntarioService.find().subscribe((voluntarios) => {
      console.log(voluntarios)
      this.voluntarios = voluntarios
    })

  }

  ngOnInit() {
    //this.filter = this.ar.snapshot.params['filter']
    //console.log(this.filter)
    this.ar.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
      this.cargarTabla()
    })
  }

  private cargarTabla() {
    switch (this.filter) {
      case 'todos':
        this.envioService.find().subscribe((envios) => {
          console.log(envios)
          this.envios = envios
          this.envios.forEach(envio => {
            this.envioService.getPaquetes(envio.id).subscribe((paquetes) => {
              this.envioCantidadPaq.push(paquetes.length)
            })
          });
          console.log(this.envioCantidadPaq)
        })
        break;
      case 'sin-traslado':
        this.envioService.find({
          where: {
            estado: 'pendiente de retiro',
            estado_traslado: 'sin_asignar'
          }
        }).subscribe((envios) => {
          console.log(envios)
          this.envios = envios
          this.envios.forEach(envio => {
            this.envioService.getPaquetes(envio.id).subscribe((paquetes) => {
              this.envioCantidadPaq.push(paquetes.length)
            })
          });
          console.log(this.envioCantidadPaq)
        })

        break;
      case 'con-traslado-voluntario':
        this.envioService.find<Envio>({
          where:{
            estado:"pendiente de retiro",
            estado_traslado: "asignado_vol"
          }
        }).subscribe((envios) => {
          console.log(envios)
          this.envios = envios
        })
        break;
      case 'con-traslado-propio':
        this.envioService.find<Envio>({
          where:{
            estado:"pendiente de retiro",
            estado_traslado: "asignado_propio"
          }
        }).subscribe((envios) => {
          console.log(envios)
          this.envios = envios
        })
        break;
      case 'realizados':
        this.envioService.find({ where: { estado: 'realizado' } }).subscribe((envios) => {
          console.log(envios)
          this.envios = envios
        })
        break;
    }
  }


  nuevoEnvioButtonClick() {
    this.router.navigateByUrl('admin/envios/todos/nuevo-envio')
  }

  cantidadPaquetesDelEnvio(index: number) {
    var cant = this.envioCantidadPaq[index]
    console.log(cant)
    return cant
  }

  borrarEnvioButtonClick(id: any) {
    this.envioService.deleteById(id).subscribe(() => {
      alert("ok")
      this.envioService.find({ where: { estado: 'pendiente de asignacion' } }).subscribe((envios) => {
        console.log(envios)
        this.envios = envios
        this.envios.forEach(envio => {
          this.envioService.getPaquetes(envio.id).subscribe((paquetes) => {
            this.envioCantidadPaq.push(paquetes.length)
          })
        });
        console.log(this.envioCantidadPaq)

      })

    })

  }

  obtenerVoluntarioAsignado(envio: Envio) {
    var nombre
    this.voluntarios.forEach(element => {
      if (element.id == envio.voluntarioId)
        nombre = element.nombre
    });
    return nombre
  }

  obtenerOrganizacionBeneficiaria(id: any) { }

  asignarTrasladoButtonClick(id) {
    this.router.navigateByUrl('/admin/envios/asignar/envio/' + id) 
  }

  verDetallesButtonClick(id: number) {
    alert("a desarrollar")
  }
}
