import { __decorate, __metadata } from "tslib";
import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';
let HideHeaderDirective = class HideHeaderDirective {
    constructor(renderer, domCtrl) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
    }
    ngOnInit() {
        this.header = this.header.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 700ms');
        });
    }
    onContentScroll($event) {
        if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
            });
        }
        else {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', '0');
            });
        }
        this.lastY = $event.detail.scrollTop;
    }
};
__decorate([
    Input('header'),
    __metadata("design:type", Object)
], HideHeaderDirective.prototype, "header", void 0);
__decorate([
    HostListener('ionScroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HideHeaderDirective.prototype, "onContentScroll", null);
HideHeaderDirective = __decorate([
    Directive({
        selector: '[appHideHeader]'
    }),
    __metadata("design:paramtypes", [Renderer2,
        DomController])
], HideHeaderDirective);
export { HideHeaderDirective };
//# sourceMappingURL=hide-header.directive.js.map