import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsListPageRoutingModule } from './products-list-routing.module';
import { ProductsListPage } from './products-list.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/directives/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
let ProductsListPageModule = class ProductsListPageModule {
};
ProductsListPageModule = __decorate([
    NgModule({
        entryComponents: [
            MenuComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProductsListPageRoutingModule,
            ComponentsModule,
            SharedModule,
            Ng2SearchPipeModule
        ],
        declarations: [ProductsListPage]
    })
], ProductsListPageModule);
export { ProductsListPageModule };
//# sourceMappingURL=products-list.module.js.map