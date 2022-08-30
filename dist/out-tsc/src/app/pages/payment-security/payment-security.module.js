import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentSecurityPageRoutingModule } from './payment-security-routing.module';
import { PaymentSecurityPage } from './payment-security.page';
import { ComponentsModule } from 'src/app/components/components.module';
let PaymentSecurityPageModule = class PaymentSecurityPageModule {
};
PaymentSecurityPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymentSecurityPageRoutingModule,
            ComponentsModule
        ],
        declarations: [PaymentSecurityPage]
    })
], PaymentSecurityPageModule);
export { PaymentSecurityPageModule };
//# sourceMappingURL=payment-security.module.js.map