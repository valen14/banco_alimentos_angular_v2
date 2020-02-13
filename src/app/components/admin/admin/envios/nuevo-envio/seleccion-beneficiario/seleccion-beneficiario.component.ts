import { Component, OnInit } from '@angular/core';
import { OrganizacionBeneficiaria, OrganizacionBeneficiariaApi } from 'src/app/service/lbservice';
import { NuevoEnvioService } from '../../../nuevo-envio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seleccion-beneficiario',
  templateUrl: './seleccion-beneficiario.component.html',
  styleUrls: ['./seleccion-beneficiario.component.css']
})
export class SeleccionBeneficiarioComponent implements OnInit {

  beneficiarios = []
  beneficiario
  id
  

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private beneficiarioService: OrganizacionBeneficiariaApi,
    private nuevoEnvioService: NuevoEnvioService) { 
      this.ar.paramMap.subscribe((params) => {
        this.id = params.get('id')
      })
      this.cargarTabla()
    }

  ngOnInit() {
        
  }

  confirmarSeleccionBeneficiario(){

    this.nuevoEnvioService.setBeneficiario(this.beneficiario)
    this.nuevoEnvioService.createEnvio()
    
    this.router.navigateByUrl('admin/envios/todos')
    
  }

  private cargarTabla(){  
    this.beneficiarioService.find().subscribe((beneficiarios)=>{
      this.beneficiarios=beneficiarios
    })
  }

  seleccionarBeneficiarioButtonClick(beneficiario: OrganizacionBeneficiaria){
    this.beneficiario=beneficiario
  }

  

 atras(){
   this.router.navigateByUrl("admin/envios/todos/nuevo-envio/seleccion-paquetes")
 }

 cancelar(){
   this.router.navigateByUrl('admin/envios/todos')
 }


}
