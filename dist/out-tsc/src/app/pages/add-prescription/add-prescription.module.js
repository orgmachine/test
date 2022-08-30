import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddPrescriptionPageRoutingModule } from './add-prescription-routing.module';
import { AddPrescriptionPage } from './add-prescription.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
let AddPrescriptionPageModule = class AddPrescriptionPageModule {
};
AddPrescriptionPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AddPrescriptionPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [AddPrescriptionPage]
    })
], AddPrescriptionPageModule);
export { AddPrescriptionPageModule };
//# sourceMappingURL=add-prescription.module.js.map