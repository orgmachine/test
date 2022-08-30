import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HealthPackagesPageRoutingModule } from './health-packages-routing.module';
import { HealthPackagesPage } from './health-packages.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let HealthPackagesPageModule = class HealthPackagesPageModule {
};
HealthPackagesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            HealthPackagesPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [HealthPackagesPage]
    })
], HealthPackagesPageModule);
export { HealthPackagesPageModule };
//# sourceMappingURL=health-packages.module.js.map