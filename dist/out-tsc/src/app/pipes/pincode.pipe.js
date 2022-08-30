import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let PincodePipe = class PincodePipe {
    transform(items, pincode) {
        if (!items)
            return [];
        if (!pincode)
            return items;
        pincode = pincode.toLowerCase();
        console.log(pincode);
        return items.filter(it => {
            return it.pincode.toLowerCase().includes(pincode);
        });
    }
};
PincodePipe = __decorate([
    Pipe({
        name: 'filter',
    })
], PincodePipe);
export { PincodePipe };
//# sourceMappingURL=pincode.pipe.js.map