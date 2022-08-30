import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderCheckoutPageRoutingModule } from './order-checkout-routing.module';
import { OrderCheckoutPage } from './order-checkout.page';
import { SharedModule } from 'src/app/directives/shared.module';
let OrderCheckoutPageModule = class OrderCheckoutPageModule {
};
OrderCheckoutPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OrderCheckoutPageRoutingModule,
            SharedModule
        ],
        declarations: [OrderCheckoutPage]
    })
], OrderCheckoutPageModule);
export { OrderCheckoutPageModule };
//# sourceMappingURL=order-checkout.module.js.map