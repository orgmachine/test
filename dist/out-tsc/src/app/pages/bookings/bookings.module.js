import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingsPageRoutingModule } from './bookings-routing.module';
import { BookingsPage } from './bookings.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            BookingsPageRoutingModule,
            SharedModule,
            ComponentsModule
        ],
        declarations: [BookingsPage]
    })
], BookingsPageModule);
export { BookingsPageModule };
//# sourceMappingURL=bookings.module.js.map