import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FaqPageRoutingModule } from './faq-routing.module';
import { SharedModule } from 'src/app/directives/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FaqPage } from './faq.page';
let FaqPageModule = class FaqPageModule {
};
FaqPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FaqPageRoutingModule,
            SharedModule,
            ComponentsModule
        ],
        declarations: [FaqPage]
    })
], FaqPageModule);
export { FaqPageModule };
//# sourceMappingURL=faq.module.js.map