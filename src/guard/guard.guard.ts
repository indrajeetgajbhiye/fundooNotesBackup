import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(public router: Router) { }
  canActivate(
    path: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthenticated()) {
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
    
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('userToken');
    if (token)
      return true;
    else
    return false;
  }
}

