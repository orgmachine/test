import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IframePage } from './iframe.page';
const routes = [
    {
        path: '',
        component: IframePage
    }
];
let IframePageRoutingModule = class IframePageRoutingModule {
};
IframePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], IframePageRoutingModule);
export { IframePageRoutingModule };
//# sourceMappingURL=iframe-routing.module.js.map