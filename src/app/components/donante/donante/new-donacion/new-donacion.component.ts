import { Component, OnInit } from '@angular/core';
import { OrganizacionDonanteApi, Bulto } from 'src/app/service/lbservice';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-donacion',
  templateUrl: './new-donacion.component.html',
  styleUrls: ['./new-donacion.component.css']
})
export class NewDonacionComponent implements OnInit {

  
  donacionForm:FormGroup
  constructor(private donanteService:OrganizacionDonanteApi, private  router: Router) { 
    this.donacionForm=new FormGroup({
      descripcion: new FormControl()
    })
    
  }

  ngOnInit() {
  }

  onSubmit(){

    this.cargarDonacion
    this.router.navigateByUrl('donante')
  }

  private cargarDonacion(){
    const descripcionForm=this.donacionForm.get('descripcion').value

    this.donanteService.createBultos(new Bulto(descripcionForm))
  }

}
