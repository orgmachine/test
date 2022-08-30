import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupportPageRoutingModule } from './support-routing.module';
import { SupportPage } from './support.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
let SupportPageModule = class SupportPageModule {
};
SupportPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SupportPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [SupportPage]
    })
], SupportPageModule);
export { SupportPageModule };
//# sourceMappingURL=support.module.js.map