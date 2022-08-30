import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavouritePage } from './favourite.page';
const routes = [
    {
        path: '',
        component: FavouritePage
    }
];
let FavouritePageRoutingModule = class FavouritePageRoutingModule {
};
FavouritePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FavouritePageRoutingModule);
export { FavouritePageRoutingModule };
//# sourceMappingURL=favourite-routing.module.js.map