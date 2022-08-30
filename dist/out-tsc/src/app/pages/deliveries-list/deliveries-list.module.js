import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DeliveriesListPageRoutingModule } from './deliveries-list-routing.module';
import { DeliveriesListPage } from './deliveries-list.page';
import { SharedModule } from 'src/app/directives/shared.module';
let DeliveriesListPageModule = class DeliveriesListPageModule {
};
DeliveriesListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DeliveriesListPageRoutingModule,
            SharedModule
        ],
        declarations: [DeliveriesListPage]
    })
], DeliveriesListPageModule);
export { DeliveriesListPageModule };
//# sourceMappingURL=deliveries-list.module.js.map