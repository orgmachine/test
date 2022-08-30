import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateSubscriptionPageRoutingModule } from './create-subscription-routing.module';
import { CreateSubscriptionPage } from './create-subscription.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/directives/shared.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { StarRatingModule } from 'ionic5-star-rating';
let CreateSubscriptionPageModule = class CreateSubscriptionPageModule {
};
CreateSubscriptionPageModule = __decorate([
    NgModule({
        entryComponents: [
            MenuComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CreateSubscriptionPageRoutingModule,
            ComponentsModule,
            SharedModule,
            StarRatingModule,
            NgxIonicImageViewerModule
        ],
        declarations: [CreateSubscriptionPage]
    })
], CreateSubscriptionPageModule);
export { CreateSubscriptionPageModule };
//# sourceMappingURL=create-subscription.module.js.map