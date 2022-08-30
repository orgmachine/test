import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApisService } from '../services/apis.service';
import { UtilService } from 'src/app/services/util.service';

@Injectable({
    providedIn: 'root'
})
export class BackGuard implements CanActivate {
isLogin: any;
    constructor(private util: UtilService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): any {
        this.isLogin = sessionStorage.getItem('loginStatus');
        console.log(this.isLogin);
          if(this.isLogin=='true'){
          return false;
        } else {
          return true;
        }
    }
}
