import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotPageRoutingModule } from './forgot-routing.module';
import { ForgotPage } from './forgot.page';
import { SharedModule } from 'src/app/directives/shared.module';
let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ForgotPageRoutingModule,
            SharedModule
        ],
        declarations: [ForgotPage]
    })
], ForgotPageModule);
export { ForgotPageModule };
//# sourceMappingURL=forgot.module.js.map