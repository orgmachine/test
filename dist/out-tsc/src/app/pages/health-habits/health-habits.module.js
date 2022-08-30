import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HealthHabitsPageRoutingModule } from './health-habits-routing.module';
import { HealthHabitsPage } from './health-habits.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let HealthHabitsPageModule = class HealthHabitsPageModule {
};
HealthHabitsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            HealthHabitsPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [HealthHabitsPage]
    })
], HealthHabitsPageModule);
export { HealthHabitsPageModule };
//# sourceMappingURL=health-habits.module.js.map