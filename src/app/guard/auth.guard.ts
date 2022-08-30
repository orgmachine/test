import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApisService } from '../services/apis.service';
import { UtilService } from 'src/app/services/util.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
isLogin: any;
    constructor(private util: UtilService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): any {
        this.isLogin = sessionStorage.getItem('loginStatus');
          if(this.isLogin=='true'){
          return true;
        } else {
          this.router.navigate(['login'])
          // this.util.showLoginAlert();
          return false;
        }
    }
}
