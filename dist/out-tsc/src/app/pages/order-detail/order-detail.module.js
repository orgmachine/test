import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderDetailPageRoutingModule } from './order-detail-routing.module';
import { OrderDetailPage } from './order-detail.page';
import { SharedModule } from 'src/app/directives/shared.module';
let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OrderDetailPageRoutingModule,
            SharedModule
        ],
        declarations: [OrderDetailPage]
    })
], OrderDetailPageModule);
export { OrderDetailPageModule };
//# sourceMappingURL=order-detail.module.js.map