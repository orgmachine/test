import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyTransactionPageRoutingModule } from './my-transaction-routing.module';
import { MyTransactionPage } from './my-transaction.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let MyTransactionPageModule = class MyTransactionPageModule {
};
MyTransactionPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MyTransactionPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [MyTransactionPage]
    })
], MyTransactionPageModule);
export { MyTransactionPageModule };
//# sourceMappingURL=my-transaction.module.js.map