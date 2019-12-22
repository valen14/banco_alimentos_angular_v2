import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonanteAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.isLoggedDonante()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  isLoggedDonante() {
    if (sessionStorage.getItem('isLoggedIn') == "true") {
      if(sessionStorage.getItem('type') == 'donante') {
        return true
      }
    }
    return false
  }

}
