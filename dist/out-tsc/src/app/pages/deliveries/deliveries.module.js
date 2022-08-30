import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DeliveriesPageRoutingModule } from './deliveries-routing.module';
import { DeliveriesPage } from './deliveries.page';
import { SharedModule } from 'src/app/directives/shared.module';
let DeliveriesPageModule = class DeliveriesPageModule {
};
DeliveriesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DeliveriesPageRoutingModule,
            SharedModule
        ],
        declarations: [DeliveriesPage]
    })
], DeliveriesPageModule);
export { DeliveriesPageModule };
//# sourceMappingURL=deliveries.module.js.map