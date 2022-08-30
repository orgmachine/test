import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { SharedModule } from 'src/app/directives/shared.module';
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProfilePageRoutingModule,
            SharedModule
        ],
        declarations: [ProfilePage]
    })
], ProfilePageModule);
export { ProfilePageModule };
//# sourceMappingURL=profile.module.js.map