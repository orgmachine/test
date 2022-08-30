import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouritePageRoutingModule } from './favourite-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/directives/shared.module';
let FavouritePageModule = class FavouritePageModule {
};
FavouritePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            FavouritePageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: []
    })
], FavouritePageModule);
export { FavouritePageModule };
//# sourceMappingURL=favourite.module.js.map