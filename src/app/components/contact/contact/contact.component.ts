import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public header: 'Contactos'
  public description: 'Administra tu lista de contactos'
  public numContact: 0
  public counterClass: 'tag secondary' 
  public formHeader: false
  constructor() { }

  ngOnInit() {
  }

}
