import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.component.html',
  styleUrls: ['./voluntario.component.css']
})
export class VoluntarioComponent implements OnInit {

  public voluntarioId: ''
  constructor(activatedRoute: ActivatedRoute) {
      this.voluntarioId=activatedRoute.snapshot.params['id']
   }

  ngOnInit() {
  }

}
