import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bulto',
  templateUrl: './bulto.component.html',
  styleUrls: ['./bulto.component.css']
})
export class BultoComponent implements OnInit {

  bultoId: ''
  constructor(activatedRoute: ActivatedRoute) { 
    this.bultoId = activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
  }

}
