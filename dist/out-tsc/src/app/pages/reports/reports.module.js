import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReportsPageRoutingModule } from './reports-routing.module';
import { ReportsPage } from './reports.page';
let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReportsPageRoutingModule
        ],
        declarations: [ReportsPage]
    })
], ReportsPageModule);
export { ReportsPageModule };
//# sourceMappingURL=reports.module.js.map