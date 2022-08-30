import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditProfilePageRoutingModule } from './edit-profile-routing.module';
import { EditProfilePage } from './edit-profile.page';
import { ComponentsModule } from 'src/app/components/components.module';
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditProfilePageRoutingModule,
            ComponentsModule
        ],
        declarations: [EditProfilePage]
    })
], EditProfilePageModule);
export { EditProfilePageModule };
//# sourceMappingURL=edit-profile.module.js.map