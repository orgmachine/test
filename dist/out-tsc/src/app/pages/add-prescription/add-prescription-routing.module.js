import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddPrescriptionPage } from './add-prescription.page';
const routes = [
    {
        path: '',
        component: AddPrescriptionPage
    }
];
let AddPrescriptionPageRoutingModule = class AddPrescriptionPageRoutingModule {
};
AddPrescriptionPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddPrescriptionPageRoutingModule);
export { AddPrescriptionPageRoutingModule };
//# sourceMappingURL=add-prescription-routing.module.js.map