import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddAddressPageRoutingModule } from './add-address-routing.module';
import { SharedModule } from 'src/app/directives/shared.module';
let AddAddressPageModule = class AddAddressPageModule {
};
AddAddressPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AddAddressPageRoutingModule,
            SharedModule,
            ReactiveFormsModule
        ],
        declarations: []
    })
], AddAddressPageModule);
export { AddAddressPageModule };
//# sourceMappingURL=add-address.module.js.map