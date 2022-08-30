import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InsufficientPageRoutingModule } from './insufficient-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/directives/shared.module';
let InsufficientPageModule = class InsufficientPageModule {
};
InsufficientPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            InsufficientPageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: []
    })
], InsufficientPageModule);
export { InsufficientPageModule };
//# sourceMappingURL=insufficient.module.js.map