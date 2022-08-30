import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HidenavModule } from './hidenav.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        imports: [HidenavModule, CommonModule],
        exports: [HidenavModule, TranslateModule]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map