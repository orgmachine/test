import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/directives/shared.module';
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = __decorate([
    NgModule({
        entryComponents: [
            MenuComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProductsPageRoutingModule,
            ComponentsModule,
            SharedModule
        ],
        declarations: [ProductsPage]
    })
], ProductsPageModule);
export { ProductsPageModule };
//# sourceMappingURL=products.module.js.map