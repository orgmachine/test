import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/directives/shared.module';
let ModalPageModule = class ModalPageModule {
};
ModalPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            ModalPageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: []
    })
], ModalPageModule);
export { ModalPageModule };
//# sourceMappingURL=modal.module.js.map