import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PackagesPageRoutingModule } from './packages-routing.module';
import { PackagesPage } from './packages.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let PackagesPageModule = class PackagesPageModule {
};
PackagesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PackagesPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [PackagesPage]
    })
], PackagesPageModule);
export { PackagesPageModule };
//# sourceMappingURL=packages.module.js.map