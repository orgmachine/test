import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyPlanPageRoutingModule } from './my-plan-routing.module';
import { MyPlanPage } from './my-plan.page';
import { ComponentsModule } from 'src/app/components/components.module';
let MyPlanPageModule = class MyPlanPageModule {
};
MyPlanPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MyPlanPageRoutingModule,
            ComponentsModule
        ],
        declarations: [MyPlanPage]
    })
], MyPlanPageModule);
export { MyPlanPageModule };
//# sourceMappingURL=my-plan.module.js.map