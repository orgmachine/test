import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyTransactionPage } from './my-transaction.page';
const routes = [
    {
        path: '',
        component: MyTransactionPage
    }
];
let MyTransactionPageRoutingModule = class MyTransactionPageRoutingModule {
};
MyTransactionPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MyTransactionPageRoutingModule);
export { MyTransactionPageRoutingModule };
//# sourceMappingURL=my-transaction-routing.module.js.map