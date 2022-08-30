import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FaqsPageRoutingModule } from './faqs-routing.module';
import { FaqsPage } from './faqs.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FaqsPageRoutingModule,
            SharedModule,
            ReactiveFormsModule
        ],
        declarations: [FaqsPage]
    })
], FaqsPageModule);
export { FaqsPageModule };
//# sourceMappingURL=Faqs.module.js.map