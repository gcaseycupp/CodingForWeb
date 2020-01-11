import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { StorageService } from '../storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let id = this.StorageService.id.get();
    

    if(!id){
      this.router.navigate(['/login']);
    } else {
      return id ? true : false;
    }
  }

  constructor(private StorageService,
    private router:Router) { 
    
  }
}
