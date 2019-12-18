import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donante',
  templateUrl: './donante.component.html',
  styleUrls: ['./donante.component.css']
})
export class DonanteComponent implements OnInit {

  donanteId: ''
  constructor(activatedRoute: ActivatedRoute) {
    this.donanteId = activatedRoute.snapshot.params['id']
   }

  ngOnInit() {
  }

}
