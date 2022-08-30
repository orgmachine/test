import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupportListPageRoutingModule } from './support-list-routing.module';
import { SupportListPage } from './support-list.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let SupportListPageModule = class SupportListPageModule {
};
SupportListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SupportListPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [SupportListPage]
    })
], SupportListPageModule);
export { SupportListPageModule };
//# sourceMappingURL=support-list.module.js.map