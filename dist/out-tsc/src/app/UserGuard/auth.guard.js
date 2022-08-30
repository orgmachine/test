import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
let UserGuard = class UserGuard {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    canActivate(next, state) {
        const selectedCity = localStorage.getItem('selectedCity');
        console.log('selectedCity', localStorage.getItem('selectedCity'));
        if (selectedCity && selectedCity != null && selectedCity !== 'null') {
            return true;
        }
        this.navCtrl.navigateRoot(['/login']);
        return false;
    }
};
UserGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [NavController])
], UserGuard);
export { UserGuard };
//# sourceMappingURL=auth.guard.js.map