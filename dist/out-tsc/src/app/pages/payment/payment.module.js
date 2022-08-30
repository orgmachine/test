import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentPageRoutingModule } from './payment-routing.module';
import { PaymentPage } from './payment.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymentPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [PaymentPage]
    })
], PaymentPageModule);
export { PaymentPageModule };
//# sourceMappingURL=payment.module.js.map