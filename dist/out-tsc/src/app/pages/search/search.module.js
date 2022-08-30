import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';
import { PipesModule } from '../../pipes/pipes.module';
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SearchPageRoutingModule,
            ReactiveFormsModule,
            PipesModule
        ],
        declarations: [SearchPage]
    })
], SearchPageModule);
export { SearchPageModule };
//# sourceMappingURL=search.module.js.map