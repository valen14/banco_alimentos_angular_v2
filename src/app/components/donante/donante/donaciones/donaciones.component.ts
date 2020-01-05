import { Component, OnInit } from '@angular/core';
import { OrganizacionDonanteApi, Bulto, OrganizacionDonante, BultoApi } from 'src/app/service/lbservice';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  bultos: Bulto[]
  idUserLog
  constructor(private router:Router, private auth: AuthService, private donanteService: OrganizacionDonanteApi, private bultoService: BultoApi) { 
    const emailUserLog= sessionStorage.getItem('email')
    this.donanteService.findOne({where:{email: emailUserLog}}).subscribe((donante) => {
      console.log(donante)
      this.idUserLog=donante['id']
      this.obtenerBultos()
    })
  }

  ngOnInit() {

  }

  private obtenerBultos(){
    this.donanteService.getBultos(this.idUserLog).subscribe((bultos) => {
      console.log(bultos),
      this.bultos = bultos
     })
  }
  public cancelarDonacion(bulto:Bulto){
    console.log(bulto)
    if(bulto['estado']=='pendiente de retiro'){
      this.bultoService.deleteById(bulto['id']).subscribe(() => {
        this.obtenerBultos()
      })  
    }
  }
}
