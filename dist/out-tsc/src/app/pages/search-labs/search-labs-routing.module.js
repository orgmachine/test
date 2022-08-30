import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchLabsPage } from './search-labs.page';
const routes = [
    {
        path: '',
        component: SearchLabsPage
    }
];
let SearchLabsPageRoutingModule = class SearchLabsPageRoutingModule {
};
SearchLabsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SearchLabsPageRoutingModule);
export { SearchLabsPageRoutingModule };
//# sourceMappingURL=search-labs-routing.module.js.map