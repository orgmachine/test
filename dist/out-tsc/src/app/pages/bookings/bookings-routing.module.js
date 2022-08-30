import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingsPage } from './bookings.page';
const routes = [
    {
        path: '',
        component: BookingsPage
    }
];
let BookingsPageRoutingModule = class BookingsPageRoutingModule {
};
BookingsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BookingsPageRoutingModule);
export { BookingsPageRoutingModule };
//# sourceMappingURL=bookings-routing.module.js.map