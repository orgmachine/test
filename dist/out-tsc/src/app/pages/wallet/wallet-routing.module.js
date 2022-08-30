import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletPage } from './wallet.page';
const routes = [
    {
        path: '',
        component: WalletPage
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], WalletPageRoutingModule);
export { WalletPageRoutingModule };
//# sourceMappingURL=wallet-routing.module.js.map