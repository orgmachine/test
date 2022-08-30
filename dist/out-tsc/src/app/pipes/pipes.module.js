import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SearchPipe } from './search.pipe';
import { PincodePipe } from './pincode.pipe';
let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    NgModule({
        declarations: [SearchPipe, PincodePipe],
        imports: [],
        exports: [SearchPipe, PincodePipe],
    })
], PipesModule);
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map