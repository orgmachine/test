import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoriesPageRoutingModule } from './categories-routing.module';
import { CategoriesPage } from './categories.page';
let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CategoriesPageRoutingModule
        ],
        declarations: [CategoriesPage]
    })
], CategoriesPageModule);
export { CategoriesPageModule };
//# sourceMappingURL=categories.module.js.map