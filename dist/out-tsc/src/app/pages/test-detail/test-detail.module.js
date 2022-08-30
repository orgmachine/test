import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestDetailPageRoutingModule } from './test-detail-routing.module';
import { TestDetailPage } from './test-detail.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let TestDetailPageModule = class TestDetailPageModule {
};
TestDetailPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TestDetailPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [TestDetailPage]
    })
], TestDetailPageModule);
export { TestDetailPageModule };
//# sourceMappingURL=test-detail.module.js.map