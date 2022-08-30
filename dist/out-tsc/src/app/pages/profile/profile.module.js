import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { ComponentsModule } from 'src/app/components/components.module';
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProfilePageRoutingModule,
            NgxIonicImageViewerModule,
            ComponentsModule
        ],
        declarations: [ProfilePage]
    })
], ProfilePageModule);
export { ProfilePageModule };
//# sourceMappingURL=profile.module.js.map