import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WalletPageRoutingModule } from './wallet-routing.module';
import { WalletPage } from './wallet.page';
let WalletPageModule = class WalletPageModule {
};
WalletPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            WalletPageRoutingModule
        ],
        declarations: [WalletPage]
    })
], WalletPageModule);
export { WalletPageModule };
//# sourceMappingURL=wallet.module.js.map