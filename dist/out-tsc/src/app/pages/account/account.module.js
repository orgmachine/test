import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountPageRoutingModule } from './account-routing.module';
import { AccountPage } from './account.page';
import { SharedModule } from 'src/app/directives/shared.module';
let AccountPageModule = class AccountPageModule {
};
AccountPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AccountPageRoutingModule,
            SharedModule
        ],
        declarations: [AccountPage]
    })
], AccountPageModule);
export { AccountPageModule };
//# sourceMappingURL=account.module.js.map