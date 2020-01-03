import { Component, OnInit } from '@angular/core';
import { OrganizacionDonanteApi, Bulto, OrganizacionDonante } from 'src/app/service/lbservice';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  bultos: Bulto[]
  emailUserLog

  constructor(private auth: AuthService, private donanteService: OrganizacionDonanteApi) { 
    this.emailUserLog= sessionStorage.getItem('email')
  }

  ngOnInit() {
    this.donanteService.findOne({where:{email: this.emailUserLog}}).subscribe((donante) => {
      console.log(donante)
      this.donanteService.getBultos(donante['id']).subscribe((bultos) => {
        console.log(bultos),
        this.bultos = bultos
       })
    })
 


  }

}
