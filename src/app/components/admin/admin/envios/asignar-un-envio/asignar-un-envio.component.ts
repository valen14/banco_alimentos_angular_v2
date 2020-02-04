import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BultoApi, EnvioApi, Bulto, Envio, VoluntarioApi } from 'src/app/service/lbservice';

@Component({
  selector: 'app-asignar-un-envio',
  templateUrl: './asignar-un-envio.component.html',
  styleUrls: ['./asignar-un-envio.component.css']
})
export class AsignarUnEnvioComponent implements OnInit {

  id: String
  type: String
  bulto : Bulto
  envio : Envio

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private bultoService: BultoApi,
    private envioService: EnvioApi,
    private voluntarioService: VoluntarioApi) {

    this.id = this.ar.snapshot.params['id']
    this.type = this.ar.snapshot.params['type']
    if(this.type == 'bulto') {
      this.bultoService.findById<Bulto>(this.id).subscribe((bulto) => { this.bulto = bulto })
    } else {
      this.envioService.findById<Envio>(this.id).subscribe((envio) => { this.envio = envio })
    }
    // Continuar para consultar los autos
  }

  ngOnInit() {
  }

}
