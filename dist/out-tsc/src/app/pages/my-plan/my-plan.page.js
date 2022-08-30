import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { Camera } from "@ionic-native/camera/ngx";
import { Router } from '@angular/router';
let MyPlanPage = class MyPlanPage {
    constructor(camera, router) {
        this.camera = camera;
        this.router = router;
    }
    ngOnInit() {
    }
};
MyPlanPage = __decorate([
    Component({
        selector: "app-my-plan",
        templateUrl: "./my-plan.page.html",
        styleUrls: ["./my-plan.page.scss"],
    }),
    __metadata("design:paramtypes", [Camera,
        Router])
], MyPlanPage);
export { MyPlanPage };
//# sourceMappingURL=my-plan.page.js.map