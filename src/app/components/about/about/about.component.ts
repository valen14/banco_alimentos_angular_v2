import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  filter: String

  constructor(private acvivatedRoute: ActivatedRoute) { 
    acvivatedRoute.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
    })
  }

  ngOnInit() {
  }

}
