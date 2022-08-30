import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersPageRoutingModule } from './orders-routing.module';
import { OrdersPage } from './orders.page';
import { SharedModule } from 'src/app/directives/shared.module';
let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OrdersPageRoutingModule,
            SharedModule
        ],
        declarations: [OrdersPage]
    })
], OrdersPageModule);
export { OrdersPageModule };
//# sourceMappingURL=orders.module.js.map