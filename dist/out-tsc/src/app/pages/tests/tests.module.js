import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestsPageRoutingModule } from './tests-routing.module';
import { TestsPage } from './tests.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let TestsPageModule = class TestsPageModule {
};
TestsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TestsPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [TestsPage]
    })
], TestsPageModule);
export { TestsPageModule };
//# sourceMappingURL=tests.module.js.map