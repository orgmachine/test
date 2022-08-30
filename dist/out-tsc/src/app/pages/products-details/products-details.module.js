import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsDetailsPageRoutingModule } from './products-details-routing.module';
import { ProductsDetailsPage } from './products-details.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/directives/shared.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { StarRatingModule } from 'ionic5-star-rating';
let ProductsDetailsPageModule = class ProductsDetailsPageModule {
};
ProductsDetailsPageModule = __decorate([
    NgModule({
        entryComponents: [
            MenuComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProductsDetailsPageRoutingModule,
            ComponentsModule,
            SharedModule,
            StarRatingModule,
            NgxIonicImageViewerModule
        ],
        declarations: [ProductsDetailsPage]
    })
], ProductsDetailsPageModule);
export { ProductsDetailsPageModule };
//# sourceMappingURL=products-details.module.js.map