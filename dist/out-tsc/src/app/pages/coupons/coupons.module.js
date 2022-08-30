import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CouponsPageRoutingModule } from './coupons-routing.module';
import { CouponsPage } from './coupons.page';
import { SharedModule } from 'src/app/directives/shared.module';
let CouponsPageModule = class CouponsPageModule {
};
CouponsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CouponsPageRoutingModule,
            SharedModule
        ],
        declarations: [CouponsPage]
    })
], CouponsPageModule);
export { CouponsPageModule };
//# sourceMappingURL=coupons.module.js.map