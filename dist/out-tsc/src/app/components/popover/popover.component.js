import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
let PopoverComponent = class PopoverComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    select(type) {
        this.popoverController.dismiss(type);
    }
};
PopoverComponent = __decorate([
    Component({
        selector: 'app-popover',
        templateUrl: './popover.component.html',
        styleUrls: ['./popover.component.scss'],
    }),
    __metadata("design:paramtypes", [PopoverController])
], PopoverComponent);
export { PopoverComponent };
//# sourceMappingURL=popover.component.js.map