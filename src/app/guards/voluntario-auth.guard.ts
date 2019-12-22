import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.isLoggedVoluntario()) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
  isLoggedVoluntario() {
    if (sessionStorage.getItem('isLoggedIn') == "true") {
      if(sessionStorage.getItem('type') == 'voluntario') {
        return true
      }
    }
    return false
  }
  
}
