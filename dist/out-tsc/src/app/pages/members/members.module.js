import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MembersPageRoutingModule } from './members-routing.module';
import { MembersPage } from './members.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
let MembersPageModule = class MembersPageModule {
};
MembersPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MembersPageRoutingModule,
            SharedModule,
            ReactiveFormsModule,
            ComponentsModule
        ],
        declarations: [MembersPage]
    })
], MembersPageModule);
export { MembersPageModule };
//# sourceMappingURL=members.module.js.map