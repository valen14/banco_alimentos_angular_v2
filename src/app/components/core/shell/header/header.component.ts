import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Banco de Alimentos, La Plata';
  isLoggedIn : boolean

  constructor(private router: Router, private authService: AuthService) { 
    
  }

  ngOnInit() {
    this.isLoggedIn = (sessionStorage.getItem('isLoggedIn') == 'true') ? true:false
    this.authService.changeLoginStatus.subscribe((newValue) => this.isLoggedIn = newValue)
  }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/')
  }

}
