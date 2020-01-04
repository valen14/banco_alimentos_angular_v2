import { Component, OnInit } from '@angular/core';
import { Insignia, OrganizacionDonanteApi, OrganizacionDonante } from 'src/app/service/lbservice';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-insignas',
  templateUrl: './insignas.component.html',
  styleUrls: ['./insignas.component.css']
})
export class InsignasComponent implements OnInit {

  insignasOtorgadas: Insignia[]
  idUserLog
  constructor(private auth: AuthService, private donanteService: OrganizacionDonanteApi) { 
    const emailUserLog= sessionStorage.getItem('email')
    this.obtenerIdUsuarioLoguedo(emailUserLog)
  }

  ngOnInit() {

  }

  private obtenerIdUsuarioLoguedo(email: string){
    this.donanteService.findOne({where:{email: email}}).subscribe((user) => {
      console.log(user)
      this.idUserLog=user['id']
      this.obtenerInsignasOtorgadas()
    })
  }
  private obtenerInsignasOtorgadas(){
    this.donanteService.getInsigniaOtorgadaOrgDonantes(this.idUserLog).subscribe((insignas) => {
      console.log(insignas)
      this.insignasOtorgadas=insignas
     })

  }

}
