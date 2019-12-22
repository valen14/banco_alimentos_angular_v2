import { Injectable, EventEmitter, Output } from '@angular/core';
import { ILogin } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() changeLoginStatus: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  login(type:string, email:string) {
    sessionStorage.setItem('isLoggedIn', 'true')
    sessionStorage.setItem('type', type)
    sessionStorage.setItem('email', email)
    this.changeLoginStatus.emit(true)
  }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('type');
    this.changeLoginStatus.emit(false)
  }
}
