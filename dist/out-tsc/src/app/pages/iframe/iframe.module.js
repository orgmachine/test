import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IframePageRoutingModule } from './iframe-routing.module';
import { IframePage } from './iframe.page';
import { ReactiveFormsModule } from '@angular/forms';
let IframePageModule = class IframePageModule {
};
IframePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            IframePageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: [IframePage]
    })
], IframePageModule);
export { IframePageModule };
//# sourceMappingURL=iframe.module.js.map