import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
let AuthGuard = class AuthGuard {
    constructor(util, router) {
        this.util = util;
        this.router = router;
    }
    canActivate(route) {
        this.isLogin = localStorage.getItem('loginStatus');
        if (this.isLogin == 'true') {
            return true;
        }
        else {
            this.router.navigate(['login']);
            // this.util.showLoginAlert();
            return false;
        }
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [UtilService, Router])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map