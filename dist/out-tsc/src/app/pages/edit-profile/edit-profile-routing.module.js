import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditProfilePage } from './edit-profile.page';
const routes = [
    {
        path: '',
        component: EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditProfilePageRoutingModule);
export { EditProfilePageRoutingModule };
//# sourceMappingURL=edit-profile-routing.module.js.map