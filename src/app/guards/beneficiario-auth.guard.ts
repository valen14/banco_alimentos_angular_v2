import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.isLoggedBeneficiario()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  isLoggedBeneficiario() {
    if (sessionStorage.getItem('isLoggedIn') == "true") {
      if(sessionStorage.getItem('type') == 'benenficiario') {
        return true
      }
    }
    return false
  }
  
}
