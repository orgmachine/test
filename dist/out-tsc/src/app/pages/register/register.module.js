import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { SharedModule } from 'src/app/directives/shared.module';
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            RegisterPageRoutingModule,
            SharedModule
        ],
        declarations: [RegisterPage]
    })
], RegisterPageModule);
export { RegisterPageModule };
//# sourceMappingURL=register.module.js.map