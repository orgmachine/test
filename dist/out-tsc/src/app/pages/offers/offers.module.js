import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OffersPageRoutingModule } from './offers-routing.module';
import { OffersPage } from './offers.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
let OffersPageModule = class OffersPageModule {
};
OffersPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OffersPageRoutingModule,
            SharedModule,
            ComponentsModule
        ],
        declarations: [OffersPage]
    })
], OffersPageModule);
export { OffersPageModule };
//# sourceMappingURL=offers.module.js.map