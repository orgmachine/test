import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubscriptionsPageRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsPage } from './subscriptions.page';
import { SharedModule } from 'src/app/directives/shared.module';
let SubscriptionsPageModule = class SubscriptionsPageModule {
};
SubscriptionsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SubscriptionsPageRoutingModule,
            SharedModule
        ],
        declarations: [SubscriptionsPage]
    })
], SubscriptionsPageModule);
export { SubscriptionsPageModule };
//# sourceMappingURL=subscriptions.module.js.map