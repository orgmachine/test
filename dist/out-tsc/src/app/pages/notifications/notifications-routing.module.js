import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsPage } from './notifications.page';
const routes = [
    {
        path: '',
        component: NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NotificationsPageRoutingModule);
export { NotificationsPageRoutingModule };
//# sourceMappingURL=notifications-routing.module.js.map