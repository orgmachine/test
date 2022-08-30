import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheckoutPageRoutingModule } from './checkout-routing.module';
import { CheckoutPage } from './checkout.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/directives/shared.module';
let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            ComponentsModule,
            CheckoutPageRoutingModule,
            SharedModule
        ],
        declarations: [CheckoutPage]
    })
], CheckoutPageModule);
export { CheckoutPageModule };
//# sourceMappingURL=checkout.module.js.map