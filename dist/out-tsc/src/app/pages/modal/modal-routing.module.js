import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalPage } from './modal.page';
const routes = [
    {
        path: '',
        component: ModalPage
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ModalPageRoutingModule);
export { ModalPageRoutingModule };
//# sourceMappingURL=modal-routing.module.js.map