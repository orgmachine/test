import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyWalletPageRoutingModule } from './my-wallet-routing.module';
import { MyWalletPage } from './my-wallet.page';
import { ComponentsModule } from 'src/app/components/components.module';
let MyWalletPageModule = class MyWalletPageModule {
};
MyWalletPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ComponentsModule,
            MyWalletPageRoutingModule
        ],
        declarations: [MyWalletPage]
    })
], MyWalletPageModule);
export { MyWalletPageModule };
//# sourceMappingURL=my-wallet.module.js.map