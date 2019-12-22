import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('type');
  }
}
