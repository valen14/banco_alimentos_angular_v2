import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css']
})
export class BeneficiarioComponent implements OnInit {

  public beneficiarioId: ''
  constructor(activatedRoute: ActivatedRoute) { 
    this.beneficiarioId = activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
  }

}
