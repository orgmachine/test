import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactUsPageRoutingModule } from './contactus-routing.module';
import { ContactUsPage } from './contactus.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ContactUsPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [ContactUsPage]
    })
], ContactUsPageModule);
export { ContactUsPageModule };
//# sourceMappingURL=contactus.module.js.map