import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { NotificationsPage } from './notifications.page';
import { SharedModule } from 'src/app/directives/shared.module';
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            NotificationsPageRoutingModule,
            SharedModule
        ],
        declarations: [NotificationsPage]
    })
], NotificationsPageModule);
export { NotificationsPageModule };
//# sourceMappingURL=notifications.module.js.map