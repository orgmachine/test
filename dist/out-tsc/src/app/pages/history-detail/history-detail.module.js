import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistoryDetailPageRoutingModule } from './history-detail-routing.module';
import { HistoryDetailPage } from './history-detail.page';
import { SharedModule } from 'src/app/directives/shared.module';
let HistoryDetailPageModule = class HistoryDetailPageModule {
};
HistoryDetailPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            HistoryDetailPageRoutingModule,
            SharedModule
        ],
        declarations: [HistoryDetailPage]
    })
], HistoryDetailPageModule);
export { HistoryDetailPageModule };
//# sourceMappingURL=history-detail.module.js.map