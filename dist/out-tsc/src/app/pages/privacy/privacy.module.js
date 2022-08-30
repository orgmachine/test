import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrivacyPageRoutingModule } from './privacy-routing.module';
import { PrivacyPage } from './privacy.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let PrivacyPageModule = class PrivacyPageModule {
};
PrivacyPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PrivacyPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [PrivacyPage]
    })
], PrivacyPageModule);
export { PrivacyPageModule };
//# sourceMappingURL=privacy.module.js.map