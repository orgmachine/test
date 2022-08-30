import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubscriptionDetailPageRoutingModule } from './subscription-detail-routing.module';
import { SubscriptionDetailPage } from './subscription-detail.page';
import { SharedModule } from 'src/app/directives/shared.module';
let SubscriptionDetailPageModule = class SubscriptionDetailPageModule {
};
SubscriptionDetailPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SubscriptionDetailPageRoutingModule,
            SharedModule
        ],
        declarations: [SubscriptionDetailPage]
    })
], SubscriptionDetailPageModule);
export { SubscriptionDetailPageModule };
//# sourceMappingURL=subscription-detail.module.js.map