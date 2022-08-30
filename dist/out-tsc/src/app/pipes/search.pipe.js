import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SearchPipe = class SearchPipe {
    transform(items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(it => {
            console.log(it);
            return it.synonyms_name.toLowerCase().includes(terms);
        });
    }
};
SearchPipe = __decorate([
    Pipe({
        name: 'search',
    })
], SearchPipe);
export { SearchPipe };
//# sourceMappingURL=search.pipe.js.map