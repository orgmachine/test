function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"homehea\"><app-header></app-header></div>\n<ion-content [scrollEvents]=\"true\">\n<!--   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher> -->\n  <!-- <ion-progress-bar type=\"indeterminate\" color=\"primary\" *ngIf=\"!isLoaded\"></ion-progress-bar> -->\n  <!-- <div *ngIf=\"isLoaded\"> -->\n  <div>\n  <div class=\"main_slider\">\n  \n <!--  <div class=\"main_content_div\">\n    <ion-slides>\n      <ion-slide *ngFor=\"let item of row_1_banner\">\n        <img [src]=\"item.banner\">\n      </ion-slide>\n    </ion-slides>\n  </div>-->\n  <div class=\"container\">\n  <div  class=\"socserch\">\n  <div class=\"certxt\"><span style=\"font-size: 24px;margin-bottom: 5px;display: block;\">Search Test : Compare Price : Book Appointments</span>\n  </div>\n  \n  <div class=\"tags\" *ngIf=\"newBucketArray.length !==0\">\n  \t<div *ngFor=\"let item of newBucketArray;let i = index;\">\n  \t\t<span>{{item}} <ion-icon name=\"close-outline\" (click)=\"remove(i)\"></ion-icon></span>\n  \t</div>\n  </div>\n    <div class=\"socserchin\">\n    <ion-searchbar class=\"searchinp\" placeholder=\"Find your Tests\" [(ngModel)]=\"terms\" animated=\"true\" \n    (ionInput)=\"onInput($event,'test')\" (ionClear)=\"onCancel($event,'test')\">\n    </ion-searchbar>\n\t\t<ion-searchbar class=\"pininp\" placeholder=\"Pincode\" [(ngModel)]=\"pincode\" (ionInput)=\"onInput($event,'pincode')\" (ionClear)=\"onCancel($event,'pincode')\">\n\t\t</ion-searchbar>\n\t    <ion-button class=\"searchbut\" (click)=\"searchLabs2()\">Search</ion-button>\n\t  </div>\n\t\t<div class=\"test-search-item\">\n\t\t  <ion-list *ngIf=\"testLoad\">\n\t    \t<ion-item *ngFor=\"let item of all_test | search: terms | slice:0:5\" class=\"keywords\" (click)=\"add(item)\">\n\t  \t    <ion-thumbnail slot=\"end\">\n\t\t        <ion-icon name=\"add-outline\"></ion-icon>\n\t\t      </ion-thumbnail>\n\t\t      <p>{{item.test_name}}</p>\n\t\t    </ion-item>\n\t\t  </ion-list>\n\t\t</div>\n\t\t<div class=\"pincode-search-item\">\n\t\t  <ion-list *ngIf=\"pincodeLoad\">\n\t    \t<ion-item *ngFor=\"let item of deliveries_pincode | filter: pincode | slice:0:3\" class=\"keywords\" (click)=\"select(item)\">\n\t\t      <p>{{item.pincode}}</p>\n\t\t    </ion-item>\n\t\t  </ion-list>\n\t\t</div>\n  </div>\n</div>\n  </div>\n\n\n\n<div class=\"frequentlytopProducts\">\n\t\n\t\t<div class=\"container\">\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\"> Popular Tests</div>\n<img src=\"assets/blue_line.jpg\">\n</div></div>\n</div></div>\n<div class=\"desktopview\">\n<div class=\"container\">\n\t<ion-slides  [options]=\"slideOpts5\">\n      <ion-slide *ngFor=\"let item of popular_tests | slice:0:16 let i = index\">\n\t\t<div class=\"grid-item-inner\">\n\t\t\t\t<div [ngClass]=\"(i % 2 == 0) ? 'mid' : 'mid second'\">\n\t\t\t\t\t\t<div class=\"discount\">\n\t\t\t\t\t\t\t<h5> Discounted Upto {{((item.mrp - item.price)/item.mrp) * 100 | number : '1.0-0'}} %</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"prosec\">\n\t\t\t \t\t\t<p class=\"category_name\">{{item.test_name}}</p>\n\t\t\t \t\t\t<div class=\"desmp uptopmp\">\n\t\t\t\t \t\t\t<ul>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Includes: {{item.parameter.length}} Parameters</li>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length === 0\">Includes: 1 Parameters</li>\n\t\t\t\t\t\t  \t<li>Provided by: {{item.labs}} Labs</li>\n\t\t\t\t\t\t  \t<li>Available in: {{item.total_cities}} Cities</li>\n\t\t\t\t\t\t  </ul> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t  <div class=\"addtomore\">\n\t\t\t\t\t  \t<button ion-button class=\"addtocart\" (click)=\"goToDetail(item)\">Know more</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  \t<div class=\"radgridtest\">\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tMRP:\n\t\t\t\t\t\t\t\t<br><span><i>₹</i> {{item.mrp}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tOffered Price: \n\t\t\t\t\t\t\t\t<br><i>₹</i> {{item.price}} Onwards\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t  \t<ion-button class=\"booknow\" (click)=\"book(item)\">Book Now</ion-button>\n\t\t\t\t\t  </div></div>\n\t\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t</ion-slide>\n    </ion-slides>\n\t</div></div>\n\t\n<div class=\"mobileview\">\n\t\n\t<ion-slides  [options]=\"slideOptsmob5\">\n      <ion-slide *ngFor=\"let item of popular_tests | slice:0:16 let i = index\">\n\t\t<div class=\"grid-item-inner\">\n\t\t\t\t<div [ngClass]=\"(i % 2 == 0) ? 'mid' : 'mid second'\">\n\t\t\t\t\t\t<div class=\"discount\">\n\t\t\t\t\t\t\t<h5> Discounted Upto {{((item.mrp - item.price)/item.mrp) * 100 | number : '1.0-0'}}%</h5>\n\t\t\t\t\t\t</div>\n\t\t\t \t\t\t<p class=\"category_name\" style=\"width: 304px;\">{{item.test_name}}</p>\n\t\t\t \t\t\t<div class=\"desmp uptopmp\">\n\t\t\t\t \t\t\t<ul>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Includes: {{item.parameter.length}} Parameters</li>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length === 0\">Includes: 1 Parameters</li>\n\t\t\t\t\t\t  \t<li>Provided by: {{item.labs}} Labs</li>\n\t\t\t\t\t\t  \t<li>Available in: {{item.total_cities}} Cities</li>\n\t\t\t\t\t\t  </ul> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t  <div class=\"addtomore\">\n\t\t\t\t\t  \t<button ion-button class=\"addtocart\" (click)=\"goToDetail(item)\">Know more</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  \t<div class=\"radgridtest\">\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tMRP:\n\t\t\t\t\t\t\t\t<br><span><i>₹</i> {{item.mrp}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tOffered Price: \n\t\t\t\t\t\t\t\t<br><i>₹</i> {{item.price}} Onwards\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t  \t<ion-button class=\"booknow\" (click)=\"book(item)\">Book Now</ion-button>\n\t\t\t\t\t  </div>\n\t\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t</ion-slide>\n    </ion-slides>\n\t\n</div>\n<div class=\"viewall\" (click)=\"showAllTests()\"> View All</div>\n\n</div>\n\n\n<div class=\"topRatedProducts\">\n\t\n\t\t<div class=\"container\">\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Most Popular Packages</div><img src=\"assets/blue_line.jpg\">\n</div></div>\n</div></div>\n\n<div class=\"desktopview\">\n<div class=\"container\">\n\t<ion-slides  [options]=\"slideOpts4\">\n      <ion-slide *ngFor=\"let item of popular_packages | slice:0:12\">\n\t  <img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n\t  \n\t\t<div class=\"grid-item-inner\">\n\t\t\n\t\t\t\t<div class=\"uptopmp\">\n\t\t \t\t<p class=\"category_namemp\">{{item.test_name}}</p> \n\t\t\t\t  <div class=\"desmp\">\n\t\t\t\t  <!-- <ul>\n\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Total no.of Tests - {{item.parameter.length}}</li>\n\t\t\t\t  \t<li>Quick Turn Around Time</li>\n\t\t\t\t  \t<li>Reporting as per NABL ISO guidelines</li>\n\t\t\t\t  </ul> -->\n\t\t\t\t  <ul>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Includes: {{item.parameter.length}} Parameters</li>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length === 0\">Includes: 1 Parameters</li>\n\t\t\t\t\t\t  \t<li>Provided by: {{item.labs}} Labs</li>\n\t\t\t\t\t\t  \t<li>Available in: {{item.total_cities}} Cities</li>\n\t\t\t\t\t\t  </ul> \n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"radgridtest\">\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tMRP:\n\t\t\t\t\t\t\t\t<br><span><i>₹</i> {{item.mrp}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tOffered Price: \n\t\t\t\t\t\t\t\t<br><i>₹</i> {{item.price}} Onwards\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"butkmore\">\n\t\t\t\t\t\t<div class=\"discountd\">\n\t\t\t\t\t\t\t<h5> Discounted Upto {{((item.mrp - item.price)/item.mrp) * 100 | number : '1.0-0'}}%</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n\t\t\t\t\t<button ion-button  class=\"know_more\" (click)=\"book(item)\">Book Now</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t</ion-slide>\n    </ion-slides>\n\t</div>\n</div>\n<div class=\"mobileview\">\n\t<ion-slides  [options]=\"slideOptsmob4\">\n      <ion-slide *ngFor=\"let item of popular_packages | slice:0:12\">\n\t\t<div class=\"grid-item-inner\">\n\t\t\t\t<div class=\"uptopmp\">\n\t\t \t\t\t<img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n\t\t \t\t\t<p class=\"category_namemp\">{{item.test_name}}</p> \n\t\t\t\t  <div class=\"desmp\">\n\t\t\t\t <!--  <ul>\n\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Total no.of Tests - {{item.parameter.length}}</li>\n\t\t\t\t  \t<li>Quick Turn Around Time</li>\n\t\t\t\t  \t<li>Reporting as per NABL ISO guidelines</li>\n\t\t\t\t  </ul> -->\n\t\t\t\t    <ul>\n\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Includes: {{item.parameter.length}} Parameters</li>\n\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length === 0\">Includes: 1 Parameters</li>\n\t\t\t\t\t  \t<li>Provided by: {{item.labs}} Labs</li>\n\t\t\t\t\t  \t<li>Available in: {{item.total_cities}} Cities</li>\n\t\t\t\t\t  </ul> \n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radgridtest\">\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tMRP:\n\t\t\t\t\t\t\t\t<br><span><i>₹</i> {{item.mrp}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tOffered Price: \n\t\t\t\t\t\t\t\t<br><i>₹</i> {{item.price}} Onwards\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"butkmore\">\n\t\t\t\t\t\t<div class=\"discountd\">\n\t\t\t\t\t\t\t<h5> Discounted Upto {{((item.mrp - item.price)/item.mrp) * 100 | number : '1.0-0'}}%</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n\t\t\t\t\t<button ion-button  class=\"know_more\" (click)=\"book(item)\">Book Now</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t</ion-slide>\n    </ion-slides>\n\t</div>\n\n<div class=\"viewall\" (click)=\"showAllPackages()\">View All Package</div>\n</div>\n\n\n  \n  \n<div class=\"ShopByProducts\">\n\t\n\t\t<div class=\"container\" >\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Health Risks</div>\n<img src=\"assets/org_line.png\">\n</div></div>\n</div>\n\n\n\n<div class=\"desktopview\">\n<ion-slides  [options]=\"slideOpts2\">\n      <ion-slide *ngFor=\"let item of risks | slice:0:12\" (click)=\"add(item)\">\n       <div class=\"grid-item-innerha\">\n\t    <img class=\"popimg\" [src]=\"item.image\">\n\t    <p class=\"category_nameha\">{{item.name}}</p> \n\t\t\t<div class=\"desha\" [innerHtml]=\"item.description | slice:0:160\">...</div>\n\t\t\t<button ion-button  class=\"addtocart\" (click)=\"viewRisk(item)\">View Test</button>\n\t  </div>\n      </ion-slide>\n    </ion-slides>\n</div>\n<div class=\"mobileview\">\n<ion-slides  [options]=\"slideOptsmob2\">\n      <ion-slide *ngFor=\"let item of risks | slice:0:12\" (click)=\"add(item)\">\n       <div class=\"grid-item-innerha\">\n\t    <img class=\"popimg\" [src]=\"item.image\">\n\t    <p class=\"category_nameha\">{{item.name}}</p> \n\t\t\t<div class=\"desha\" [innerHtml]=\"item.description | slice:0:160\">...</div>\n\t\t\t<button ion-button  class=\"addtocart\" (click)=\"viewRisk(item)\">View Test</button>\n\t  </div>\n      </ion-slide>\n    </ion-slides>\n</div>\n</div>\n</div>\n\n\n\n<div class=\"raditestcon\">\n<div class=\"container\">\n<div class=\"row\">\n\n<div class=\"col-md-12 col-lg-6 col-xl-6\">\n<img src=\"assets/radtest.png\"/>\n\n</div>\n\n<div class=\"col-md-12 col-lg-6 col-xl-6\">\n\t<h2>Radiology Test</h2>\n\t<p class=\"text-justify\" style=\" line-height: 30px;\">Radiology, also called diagnostic imaging, is a series of different tests that take pictures or images of various parts of the body.  Many of these tests are unique in that they allow doctors to see inside the body.  A number of different imaging exams can be used to provide this view, including X-ray, MRI, ultrasound, CT scan and PET scan.<br><i>“Radiology is essential to the diagnosis of many diseases, particularly cancer.  Early diagnosis saves live.  Without diagnosis there can be no treatment, there can be no cure.” </i></p>\n\t<div class=\"radgridtest\">\n\t\t<div class=\"radgridtestbox\" (click)=\"goToRadiology()\">\n\t\t\t<img src=\"assets/rt1.png\">\n\t\t\t<br>X-Ray / Mammography\n\t\t</div>\n\t\t<div class=\"radgridtestbox\" (click)=\"goToRadiology()\">\n\t\t\t<img src=\"assets/rt2.png\">\n\t\t\t<br>Ultrasound\n\t\t</div>\n\t\t<div class=\"radgridtestbox\" (click)=\"goToRadiology()\">\n\t\t\t<img src=\"assets/rt3.png\">\n\t\t\t<br>CT Scan / MRI\n\t\t</div>\n\t</div>\n</div>\n</div>\n</div></div>\n\n\n<div class=\"raditestcon cardio\">\n<div class=\"container\">\n<div class=\"row\">\n\n\n<div class=\"col-md-12 col-lg-6 col-xl-6\">\n<h2>Cardiology Test</h2>\n<p class=\"text-justify\" style=\" line-height: 30px;\">Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Heart disease relates specifically to the heart, while cardiovascular disease affects the heart, the blood vessels, or both. <br><i> There are different heart health tests, but it’s important to remember that these tests have little to no risk involved and are highly beneficial for allowing your doctor to understand how your heart is working.</i></p>\n<div class=\"radgridtest\">\n\t<div class=\"radgridtestbox\" (click)=\"goToCardiology()\">\n\t\t<img src=\"assets/ct1.png\">\n\t\t<br>ECG / Holter\n\t</div>\n\t<div class=\"radgridtestbox\" (click)=\"goToCardiology()\">\n\t\t<img src=\"assets/ct2.png\">\n\t\t<br>ECHO / TMT\n\t</div>\n\t<div class=\"radgridtestbox\" (click)=\"goToCardiology()\">\n\t\t<img src=\"assets/ct3.png\">\n\t\t<br>Colour Doppler\n\t</div>\n<!-- <div class=\"radgridtestbox\"><img src=\"assets/r1_02.png\"><br>Heart & Diabetic \nRisk test</div>\n<div class=\"radgridtestbox\"><img src=\"assets/r1_03.png\"><br>Heart & Diabetic \nRisk test</div> -->\n</div>\n</div>\n\n<div class=\"col-md-12 col-lg-6 col-xl-6\">\n<img src=\"assets/cardio.png\"/>\n\n</div>\n\n</div>\n</div></div>\n\n<div class=\"ShopByProducts heathhab\">\n<div class=\"container\" >\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Health Habits</div>\n<img src=\"assets/org_line.png\">\n</div></div>\n</div>\n<div class=\"desktopview\">\n\t<ion-slides  [options]=\"slideOpts3\">\n      <ion-slide *ngFor=\"let item of habbits | slice:0:8\" (click)=\"add(item)\">\n\t\t\t<div class=\"grid-item-innerha\">\n\t\t\t  <img class=\"popimg\" [src]=\"item.image\">\n\t\t\t  <p class=\"category_nameha\">{{item.name}}</p> \n\t\t\t\t<div class=\"desha\" [innerHtml]=\"item.description | slice:0:160\">...</div>\n\t\t\t\t<button ion-button  class=\"addtocart\" (click)=\"viewHabit(item)\" >View Test</button>\n\t\t\t</div>\n\t\t</ion-slide>\n    </ion-slides>\n\t</div>\n\t<div class=\"mobileview\">\n\t<ion-slides  [options]=\"slideOptsmob3\">\n      <ion-slide *ngFor=\"let item of habbits | slice:0:8\" (click)=\"add(item)\">\n\t\t\t<div class=\"grid-item-innerha\">\n\t\t\t  <img class=\"popimg\" [src]=\"item.image\">\n\t\t\t  <p class=\"category_nameha\">{{item.name}}</p> \n\t\t\t\t<div class=\"desha\" [innerHtml]=\"item.description | slice:0:160\">...</div>\n\t\t\t\t<button ion-button  class=\"addtocart\" (click)=\"viewHabit(item)\" >View Test</button>\n\t\t\t</div>\n\t\t</ion-slide>\n    </ion-slides>\n\t</div>\n\t</div>\n</div>\n\n\t<div class=\"row\">\n\t\t<img [src]=\"row_2_banner\">\n\t</div>\n\n<div class=\"numcount container-fluid\">\n<div class=\"row\">\n<div class=\"col-xl-3 col-md-3 col-sm-12\">\n<div class=\"ct-counter ct-counter-layout1 style1 \">\n<div class=\"ct-counter-inner\">\n<div class=\"ct-counter-icon\">\n<img src=\"assets/hp.png\"></div>\n<div class=\"ct-counter-meta\">\n<div class=\"ct-counter-number\">\n<span class=\"ct-counter-number-value\">{{100000+bookings.length}}</span>\n <span class=\"ct-counter-number-suffix\">+</span></div>\n <div class=\"ct-counter-title\">Happy Patients</div></div></div></div>\n</div>\n<div class=\"col-xl-3 col-md-3 col-sm-12\">\n<div class=\"ct-counter ct-counter-layout1 style1 \">\n<div class=\"ct-counter-inner\">\n<div class=\"ct-counter-icon\">\n<img src=\"assets/lt.png\"></div>\n<div class=\"ct-counter-meta\">\n<div class=\"ct-counter-number\">\n<span class=\"ct-counter-number-value\">{{all_tests.length}}</span>\n <span class=\"ct-counter-number-suffix\">+</span></div>\n <div class=\"ct-counter-title\">Tests Available</div></div></div></div>\n</div>\n<div class=\"col-xl-3 col-md-3 col-sm-12\">\n<div class=\"ct-counter ct-counter-layout1 style1 \">\n<div class=\"ct-counter-inner\">\n<div class=\"ct-counter-icon\">\n<img src=\"assets/pl.png\"></div>\n<div class=\"ct-counter-meta\">\n<div class=\"ct-counter-number\">\n<span class=\"ct-counter-number-value\">{{total_lab.length}}</span>\n <span class=\"ct-counter-number-suffix\">+</span></div>\n <div class=\"ct-counter-title\">Partner Lab</div></div></div></div>\n</div>\n<div class=\"col-xl-3 col-md-3 col-sm-12\">\n<div class=\"ct-counter ct-counter-layout1 style1 \">\n<div class=\"ct-counter-inner\">\n<div class=\"ct-counter-icon\">\n<img src=\"assets/ps.png\"></div>\n<div class=\"ct-counter-meta\">\n<div class=\"ct-counter-number\">\n<span class=\"ct-counter-number-value\">{{all_pincodes.length}}</span>\n <span class=\"ct-counter-number-suffix\">+</span></div>\n <div class=\"ct-counter-title\">PIN codes Serving</div></div></div></div>\n</div>\n\n</div></div>\n\n<div class=\"clinsec\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div style=\"margin:30px auto\">\n\t\t\t\t<div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Our Network Partners</div><img src=\"assets/blue_line.jpg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12 col-lg-12 col-xl-12 p-0\">\n\t\t\t\t<div class=\"grid-item-innerc\">\t\t\t\t  \n\t\t\t\t  <ion-slides [options]=\"slideOpts\">\n      \t\t\t<ion-slide *ngFor=\"let item of primary_lab\">\n        \t\t\t<img [src]=\"item.logo\">\n\t\t\t      </ion-slide>\n\t\t\t    </ion-slides>\n\t\t\t\t</div>\n\t    </div>\n\t  </div>\n\t</div>\n</div>\n<br>\n<div class=\"majorcity\">\n\t<div class=\"container\">\n<div class=\"row\">\n<div style=\"margin:10px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\">\n\t<div class=\"item--sub-title style-default\" style=\"color: #fff;\">Major Cities</div><img src=\"assets/white_line.jpg\">\n</div></div>\n</div></div>\n\t\n\t<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12 col-lg-12 col-xl-12 p-0\">  \n<div class=\"mcity\">\n<div class=\"mcityt\" *ngFor=\"let item of cities | sort:'city'\">\n{{item.city}}&nbsp;|&nbsp;\n</div> \n</div>\n\t\n\t</div></div></div>\n\t\n</div>\n\n\n\n</div><!-- isLoaded div END  -->\n\n\n<app-footer></app-footer>\n<!-- \t<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"openQuery()\">\n    <img src=\"assets/call_but.png\" width=\"\">\n  </ion-fab>\n\t<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n\t\t<a href=\"https://api.whatsapp.com/send?phone=+919311213388\"  target=\"_blank\"><img src=\"assets/watsapp.png\" width=\"\"></a>\n  </ion-fab> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic5-star-rating */
    "./node_modules/ionic5-star-rating/fesm2015/ionic5-star-rating.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__);

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], ionic5_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRatingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div .back_image {\n  height: 144px;\n  width: 100%;\n  border-radius: 15px;\n  background-position: center;\n  background-size: cover;\n  margin: 10px 0px 0px 10px;\n}\n\n.search-tag {\n  background: var(--ion-color-primary);\n  padding: 16px;\n}\n\n.search-tag p {\n  color: white;\n  margin-bottom: 0px;\n}\n\n.search-tag ion-icon {\n  position: relative;\n  top: 3px;\n}\n\n.tags {\n  padding-left: 14px;\n  margin: 8px 0 1px;\n  display: inline-block;\n}\n\n.tags span {\n  font-size: 12px;\n  background: #fff;\n  margin: 0px 2px;\n  padding: 4px 6px;\n  border-radius: 20px;\n  color: #000;\n  border: 1px solid #ea5b24;\n}\n\n.tags span ion-icon {\n  position: relative;\n  top: 2px;\n  color: #fff;\n  background: #ea5b24;\n  border-radius: 50px;\n  padding: 2px;\n  font-size: 10px;\n  top: 2px;\n}\n\n.test-search-item {\n  width: 98%;\n  margin: auto;\n}\n\n.test-search-item ion-thumbnail {\n  width: 30px;\n  height: 20px;\n}\n\n.test-search-item ion-item {\n  --padding-start: 0px;\n}\n\n.test-search-item ion-list {\n  border-radius: 15px;\n  padding: 0px;\n}\n\n.test-search-item p {\n  margin: 0px;\n  padding-left: 16px;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.test-search-item span {\n  float: right;\n}\n\n.pincode-search-item {\n  width: 98%;\n  margin: auto;\n}\n\n.pincode-search-item ion-item {\n  --padding-start: 0px;\n}\n\n.pincode-search-item ion-list {\n  border-radius: 15px;\n  padding: 0px;\n}\n\n.pincode-search-item p {\n  margin: 0px;\n  padding-left: 16px;\n  font-size: 13px;\n  font-weight: bold;\n}\n\nion-slides {\n  height: 35%;\n}\n\nion-label {\n  margin-left: 14px;\n}\n\n.addtomore {\n  border-top: 1px solid #ddd;\n  padding: 10px 0px;\n}\n\n.booknow {\n  margin: 10px 0px;\n  /*--background:  var(--ion-color-primary);*/\n  --border-radius: 50px;\n}\n\n.category_name {\n  font-size: 14px;\n  width: 245px;\n  height: 56px;\n  font-weight: bold;\n  text-align: center;\n  padding: 12px 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.category_price {\n  font-size: 13px;\n  font-weight: bold;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n\n.category_des {\n  font-size: 14px;\n  margin: 0 10px 10px 10px;\n}\n\n.price {\n  color: #ea5b24;\n  font-size: 17px;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-right: 10px;\n}\n\n.categories-section {\n  background-image: url(\"https://demo.casethemes.net/organio/wp-content/uploads/2021/03/bg-section7.jpg\");\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n  padding-bottom: 50px;\n}\n\n.product_review {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  display: block ruby;\n}\n\n.colprod.ml-2 {\n  margin-left: 10px !important;\n  margin-bottom: 10px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;\n}\n\n.whychooseus {\n  padding: 50px 0;\n}\n\n.ShopByProducts {\n  padding-bottom: 50px;\n}\n\n.addtocart {\n  background: transparent;\n  color: #ea5b24;\n  padding: 7px 10px;\n  font-size: 13px;\n  border-radius: 20px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  border: 1px solid;\n  text-transform: uppercase;\n}\n\n.frequentlytopProducts {\n  background-image: url('pop_contbg.png');\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-size: cover;\n  text-align: center;\n}\n\n/*.grid-item-inner {\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n}*/\n\n.popimg {\n  width: 108px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.elementor-widget-ct_fancy_box {\n  cursor: pointer;\n}\n\n.pop_pk {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.topRatedProducts {\n  text-align: center;\n}\n\n.mid .discount {\n  border-bottom: 1px solid #ddd;\n}\n\n.mid .discount h5 {\n  padding: 10px 0px;\n  text-transform: uppercase;\n  margin: 0px;\n  font-family: \"Poppins-Medium\";\n  background: #3c4252;\n  font-size: 14px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 0px;\n  color: #fff;\n}\n\n.mid.second .discount {\n  border-bottom: 1px solid #ddd;\n}\n\n.mid.second .discount h5 {\n  padding: 10px 0px;\n  text-transform: uppercase;\n  margin: 0px;\n  font-family: \"Poppins-Medium\";\n  background: #3c4252;\n  font-size: 14px;\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 0px;\n  color: #fff;\n}\n\n.topRatedProducts .grid-item-inner {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 10px 10px 0 0;\n  margin-bottom: 1px;\n}\n\n.uptopmp {\n  padding: 0 10px;\n}\n\n.uptopmp img {\n  margin: 5px 0px;\n}\n\n.mpopimg {\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  position: absolute;\n  top: 0px;\n  left: 40%;\n  padding: 10px;\n  background: #fff;\n}\n\n.category_namemp {\n  font-family: Poppins-Medium;\n  font-size: 20px;\n  padding-top: 60px;\n  line-height: 26px;\n  height: 104px;\n}\n\n.parameter {\n  text-align: left;\n}\n\n.desmp.uptopmp ul {\n  text-align: center;\n  height: 55px;\n}\n\n.desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\n\n.mrpricemp {\n  font-size: 15px;\n  text-decoration: line-through;\n  color: #fa8152;\n  font-weight: bold;\n}\n\n.pricemp {\n  font-size: 15px;\n  color: #fa8152;\n  font-weight: bold;\n}\n\n.butkmore {\n  border-top: 1px solid #ddd;\n}\n\n.know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.ShopByProducts {\n  background: #f5f7fc;\n}\n\n.grid-item-innerha {\n  text-align: center;\n}\n\n.desha {\n  margin: 7px 0;\n}\n\n.category_nameha {\n  font-size: 20px;\n  color: #007c9d;\n  font-family: Poppins-Medium;\n  /*font-weight: bold;\n  text-transform: uppercase;*/\n  padding-top: 15px;\n  line-height: 20px;\n  margin: 0;\n}\n\n.viewall {\n  background: white;\n  color: #ea5b24;\n  padding: 8px 20px;\n  font-size: 14px;\n  border-radius: 20px;\n  margin: 30px auto;\n  text-align: center;\n  border: 1px solid;\n  text-transform: uppercase;\n  display: inline-block;\n}\n\n.topRatedProducts .viewall {\n  color: #007c9d;\n}\n\n.radgridtest {\n  font-size: 14px;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.radgridtest .pricelbl {\n  width: 50%;\n  font-family: \"Poppins-Medium\";\n}\n\n.radgridtest .pricelbl span {\n  color: red;\n  font-weight: bold;\n  text-decoration: line-through;\n}\n\n.radgridtestbox {\n  text-align: center;\n  font-size: 14px;\n  margin: 0 0px;\n  cursor: pointer;\n}\n\n.radgridtestbox img {\n  max-width: 40%;\n}\n\n.majorcity {\n  background: #3f3f3f;\n}\n\n.mcity {\n  line-height: 24px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.majorcity {\n  background: #3f3f3f;\n  padding-bottom: 40px;\n}\n\n.mcityt {\n  float: left;\n}\n\n.searchbar-input {\n  background: #FFF !important;\n  border-radius: 50px !important;\n  font-size: 13px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important;\n  border: 1px solid #008f47 !important;\n  color: #008f47 !important;\n  font-weight: bold;\n}\n\n.ct-header-main {\n  margin: 10px 0;\n  padding-bottom: 10px;\n  box-shadow: none !important;\n}\n\n.uptopmp {\n  padding: 0 10px;\n}\n\n.category_namepo {\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-top: 20px;\n  line-height: 30px;\n}\n\n.desmp ul {\n  text-align: center;\n  height: auto;\n}\n\n.desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\n\n.butkmore {\n  text-align: center;\n}\n\n.butkmore .know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.mid {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n  margin: 16px 8px 20%;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.mid.second {\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n\n.uptopmptop {\n  border-bottom: 1px solid #ddd;\n  padding: 7px 0;\n}\n\n.uptopmpprice {\n  display: -webkit-box;\n  display: flex;\n  color: red;\n}\n\n.butbook {\n  text-align: center;\n}\n\n.butbook .know_more {\n  margin: 15px;\n  color: #fff;\n  background: #007c9d;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.prosec {\n  padding: 20px 10px;\n}\n\n.discountd {\n  background: #3c4252;\n  color: #fff;\n  margin: 0;\n  padding: 0;\n}\n\n.discountd h5 {\n  margin: 0;\n  padding: 8px 0;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.pricelbl i {\n  font-family: arial;\n  font-weight: bold;\n}\n\n.desha {\n  height: 55px;\n  overflow: hidden;\n}\n\n.raditestcon {\n  padding: 20px 0 10px;\n}\n\n.tags div {\n  float: left;\n  margin-bottom: 8px;\n}\n\n.certxt {\n  color: #fff;\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 10px;\n}\n\n.certxt span {\n  font-weight: bold;\n}\n\n.main_slider {\n  background-image: url('banner.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURHQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtBQ0FKOztBRENJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNKLFFBQUE7QUNDSjs7QURFQTtFQUFPLGtCQUFBO0VBQ1AsaUJBQUE7RUFDQSxxQkFBQTtBQ0VBOztBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQVkseUJBQUE7QUNDaEI7O0FEQUk7RUFBUyxrQkFBQTtFQUNiLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0ksUUFBQTtBQ0dKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNFSjs7QURESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR1I7O0FEREk7RUFDSSxvQkFBQTtBQ0dSOztBRERJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDR1I7O0FEREk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURESTtFQUNJLFlBQUE7QUNHUjs7QURBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDR0o7O0FERkk7RUFDSSxvQkFBQTtBQ0lSOztBREZJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDSVI7O0FERkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNJUjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QURGQTtFQUNJLGlCQUFBO0FDS0o7O0FESEE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESEE7RUFDSSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EscUJBQUE7QUNNSjs7QURKQTtFQUFnQixlQUFBO0VBQWdCLFlBQUE7RUFDaEMsWUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUFtQixVQUFBO0VBQVksU0FBQTtBQ1luQzs7QURWQTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBQ2FKOztBRFhBO0VBQU8sY0FBQTtFQUFlLGVBQUE7RUFDdEIsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZ0JBOztBRGRBO0VBQW9CLHVHQUFBO0VBQ3BCLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUF1QixrQkFBQTtFQUFtQixvQkFBQTtBQ29CMUM7O0FEbEJBO0VBQWdCLGtCQUFBO0VBQW1CLFVBQUE7RUFBWSxTQUFBO0VBQVUsbUJBQUE7QUN5QnpEOztBRHJCQTtFQUFjLDRCQUFBO0VBQThCLG1CQUFBO0VBQW9CLGdCQUFBO0VBQWlCLG1CQUFBO0VBQ2pGLCtFQUFBO0FDNEJBOztBRDFCQTtFQUNJLGVBQUE7QUM2Qko7O0FEMUJBO0VBQWdCLG9CQUFBO0FDOEJoQjs7QUQ3QkE7RUFBVyx1QkFBQTtFQUNYLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ2lDQTs7QUQvQkE7RUFDSSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFBNkIsNkJBQUE7RUFDN0Isc0JBQUE7RUFDQSxrQkFBQTtBQ21DSjs7QUQvQkE7Ozs7RUFBQTs7QUFLQTtFQUFTLFlBQUE7RUFDTCxnQ0FBQTtBQ21DSjs7QURoQ0E7RUFDSSxlQUFBO0FDbUNKOztBRGpDQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7QUNvQ0o7O0FEbENBO0VBQ0ksa0JBQUE7QUNxQ0o7O0FEbkNBO0VBQ0ssNkJBQUE7QUNzQ0w7O0FEckNLO0VBQ0csaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ1IsZUFBQTtFQUFnQiw0QkFBQTtFQUNoQiwrQkFBQTtFQUFnQyxXQUFBO0FDeUNoQzs7QUR0Q0E7RUFDSyw2QkFBQTtBQ3lDTDs7QUR4Q0s7RUFDRyxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDUixlQUFBO0VBQWdCLDJCQUFBO0VBQ1osK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQThCLFdBQUE7QUM0Q2xDOztBRHpDQTtFQUFtQyxrQkFBQTtFQUFtQixzQkFBQTtFQUFzQiw0QkFBQTtFQUM1RSxrQkFBQTtBQytDQTs7QUQ5Q0E7RUFBUyxlQUFBO0FDa0RUOztBRGpEQTtFQUFhLGVBQUE7QUNxRGI7O0FEcERBO0VBQVMsbUJBQUE7RUFDVCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUN3REE7O0FEdkRBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFBa0IsaUJBQUE7RUFDdEIsYUFBQTtBQzJEQTs7QUR6REE7RUFDSSxnQkFBQTtBQzRESjs7QUR6REE7RUFBa0Isa0JBQUE7RUFBbUIsWUFBQTtBQzhEckM7O0FEN0RBO0VBQVUsb0NBQUE7RUFDVix3QkFBQTtFQUNBLDRCQUFBO0VBQTZCLGdCQUFBO0VBQWlCLGVBQUE7RUFDOUMsZ0JBQUE7RUFDQSxrQkFBQTtBQ21FQTs7QURsRUE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNxRUo7O0FEbkVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3NFSjs7QURwRUE7RUFDSSwwQkFBQTtBQ3VFSjs7QURyRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDd0VKOztBRHRFQTtFQUFpQixtQkFBQTtBQzBFakI7O0FEekVBO0VBQW9CLGtCQUFBO0FDNkVwQjs7QUQ1RUE7RUFDSSxhQUFBO0FDK0VKOztBRDdFQTtFQUFpQixlQUFBO0VBQWdCLGNBQUE7RUFDN0IsMkJBQUE7RUFDSjs2QkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFBaUIsU0FBQTtBQ21GakI7O0FEakZBO0VBQVMsaUJBQUE7RUFDVCxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDcUZBOztBRHBGQTtFQUEyQixjQUFBO0FDd0YzQjs7QUR2RkE7RUFBYyxlQUFBO0VBQ1osb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUMyRkY7O0FEMUZFO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FDNEZKOztBRDNGSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDNkZSOztBRHpGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDNEZGOztBRDNGRTtFQUNFLGNBQUE7QUM2Rko7O0FEMUZBO0VBQ0UsbUJBQUE7QUM2RkY7O0FEM0ZBO0VBQVEsaUJBQUE7RUFDTixXQUFBO0VBQ0EsZUFBQTtBQytGRjs7QUQ3RkE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDZ0dGOztBRDlGQTtFQUFRLFdBQUE7QUNrR1I7O0FEaEdBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ21HSjs7QURoR0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ21HRjs7QUQ5RkE7RUFBUyxlQUFBO0FDa0dUOztBRGpHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ29HSjs7QURqR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNvR0o7O0FEbEdBO0VBQ0ksb0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQTZCLGdCQUFBO0VBQWlCLGVBQUE7RUFDOUMsZ0JBQUE7RUFDQSxrQkFBQTtBQ3VHSjs7QURyR0E7RUFDSSxrQkFBQTtBQ3dHSjs7QUR2R0k7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDeUdKOztBRHZHQTtFQUNJLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUMwR0o7O0FEdkdBO0VBQ0ksMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUMwR0o7O0FEeEdBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FDMkdGOztBRHpHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7QUM0R0o7O0FEekdBO0VBQ0ksa0JBQUE7QUM0R0o7O0FEM0dJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQzZHUjs7QUQxR0E7RUFBUSxrQkFBQTtBQzhHUjs7QUQ3R0E7RUFBVyxtQkFBQTtFQUNYLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2lIQTs7QURoSEE7RUFBYyxTQUFBO0VBQ2QsY0FBQTtFQUNBLGVBQUE7RUFBZ0IseUJBQUE7RUFBMEIsNkJBQUE7RUFDMUMsZUFBQTtBQ3NIQTs7QURySEE7RUFBYyxrQkFBQTtFQUNaLGlCQUFBO0FDeUhGOztBRHZIQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQzBIRjs7QUR4SEE7RUFDRSxvQkFBQTtBQzJIRjs7QUR6SEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUM0SEY7O0FEekhBO0VBQVEsV0FBQTtFQUFZLGtCQUFBO0VBQ3BCLGVBQUE7RUFBZ0IsbUJBQUE7QUMrSGhCOztBRDlIQTtFQUFhLGlCQUFBO0FDa0liOztBRGhJQTtFQUFjLG1DQUFBO0VBQ1YsMkJBQUE7RUFDQSw0QkFBQTtFQUE2QixzQkFBQTtBQ3FJakMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTQ0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgfVxufVxuLnNlYXJjaC10YWd7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gICAgfVxufVxuLnRhZ3Mge3BhZGRpbmctbGVmdDogMTRweDtcbm1hcmdpbjogOHB4IDAgMXB4O1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNvY3NlcmNoe1xuICAgXG59XG4udGFncyBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDBweCAycHg7XG4gICAgcGFkZGluZzogNHB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiAjMDAwO2JvcmRlcjogMXB4IHNvbGlkICNlYTViMjQ7XG4gICAgaW9uLWljb257cG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAycHg7XG5jb2xvcjogI2ZmZjtcbmJhY2tncm91bmQ6ICNlYTViMjQ7XG5ib3JkZXItcmFkaXVzOiA1MHB4O1xucGFkZGluZzogMnB4O1xuZm9udC1zaXplOiAxMHB4O1xuICAgIHRvcDogMnB4O1xuICAgIH1cbn1cblxuLnRlc3Qtc2VhcmNoLWl0ZW17XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaW9uLXRodW1ibmFpbHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBzcGFue1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuLnBpbmNvZGUtc2VhcmNoLWl0ZW17XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDM1JTtcbn1cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4uYWRkdG9tb3Jle1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIFxufVxuLmJvb2tub3d7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAvKi0tYmFja2dyb3VuZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsqL1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5jYXRlZ29yeV9uYW1lIHtmb250LXNpemU6IDE0cHg7d2lkdGg6IDI0NXB4O1xuaGVpZ2h0OiA1NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY2F0ZWdvcnlfcHJpY2V7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAgMDttYXJnaW46IDA7XG59XG4uY2F0ZWdvcnlfZGVzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xufVxuLnByaWNle2NvbG9yOiAjZWE1YjI0O2ZvbnQtc2l6ZTogMTdweDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xucGFkZGluZy10b3A6IDVweDtcbnBhZGRpbmctcmlnaHQ6IDEwcHg7fVxuLmNhdGVnb3J5X2ltZyB7fVxuLmNhdGVnb3JpZXMtc2VjdGlvbntiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2RlbW8uY2FzZXRoZW1lcy5uZXQvb3JnYW5pby93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMy9iZy1zZWN0aW9uNy5qcGdcIik7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmctYm90dG9tOiA1MHB4O31cblxuLnByb2R1Y3RfcmV2aWV3e3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAgMDttYXJnaW46IDA7ZGlzcGxheTogYmxvY2sgcnVieTt9XG4uY29scHJvZGZyZXt9XG5cblxuLmNvbHByb2QubWwtMnttYXJnaW4tbGVmdDogMTBweCAgIWltcG9ydGFudDttYXJnaW4tYm90dG9tOiAxMHB4O2JhY2tncm91bmQ6ICNmZmY7Ym9yZGVyLXJhZGl1czogMTBweDtcbmJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDE1cHggMjVweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNXB4IDEwcHg7fVxuXG4ud2h5Y2hvb3NldXMge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbn1cblxuLlNob3BCeVByb2R1Y3Rze3BhZGRpbmctYm90dG9tOiA1MHB4O31cbi5hZGR0b2NhcnR7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5jb2xvcjogI2VhNWIyNDtcbnBhZGRpbmc6IDdweCAxMHB4O1xuZm9udC1zaXplOiAxM3B4O1xuYm9yZGVyLXJhZGl1czogMjBweDtcbm1hcmdpbjogNHB4IGF1dG87XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5kaXNwbGF5OiBibG9jaztcbmJvcmRlcjogMXB4IHNvbGlkO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XG5cbi5mcmVxdWVudGx5dG9wUHJvZHVjdHN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wb3BfY29udGJnLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVsdGlwbGVjYXRze31cbi8qLmdyaWQtaXRlbS1pbm5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggOHB4IDEwcHg7XG59Ki9cbi5wb3BpbWcge3dpZHRoOiAxMDhweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHggMTBweCAwcHggMHB4O1xufVxuICAgICAgICBcbi5lbGVtZW50b3Itd2lkZ2V0LWN0X2ZhbmN5X2JveCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvcF9wayB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4udG9wUmF0ZWRQcm9kdWN0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1pZCAuZGlzY291bnR7XG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICBoNSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1NZWRpdW0nO1xuICAgICAgICBiYWNrZ3JvdW5kOiMzYzQyNTI7XG5mb250LXNpemU6IDE0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7Y29sb3I6ICNmZmY7XG4gICAgfVxufVxuLm1pZC5zZWNvbmQgLmRpc2NvdW50e1xuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgaDUge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTWVkaXVtJztcbiAgICAgICAgYmFja2dyb3VuZDojM2M0MjUyO1xuZm9udC1zaXplOiAxNHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MHB4IDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweCA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowcHg7Y29sb3I6ICNmZmY7XG4gICAgfVxufVxuLnRvcFJhdGVkUHJvZHVjdHMgLmdyaWQtaXRlbS1pbm5lcnt0ZXh0LWFsaWduOiBjZW50ZXI7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG5tYXJnaW4tYm90dG9tOiAxcHg7fVxuLnVwdG9wbXB7cGFkZGluZzogMCAxMHB4OyB9XG4udXB0b3BtcCBpbWd7bWFyZ2luOjVweCAwcHg7fVxuLm1wb3BpbWd7Ym9yZGVyLXJhZGl1czogNTBweDtcbmJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6MHB4O1xubGVmdDogNDAlO1xucGFkZGluZzogMTBweDtcbmJhY2tncm91bmQ6ICNmZmY7fVxuLmNhdGVnb3J5X25hbWVtcHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O2xpbmUtaGVpZ2h0OiAyNnB4O1xuaGVpZ2h0OiAxMDRweDtcbn1cbi5wYXJhbWV0ZXJ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRlc21wLnVwdG9wbXAgdWx7dGV4dC1hbGlnbjogY2VudGVyO2hlaWdodDogNTVweDt9XG4uZGVzbXAgbGl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9idWxfY2hrLnBuZycpO1xuYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4O1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtsaXN0LXN0eWxlOiBub25lO2ZvbnQtc2l6ZTogMTRweDtcbnRleHQtYWxpZ246IGxlZnQ7XG5wYWRkaW5nLWxlZnQ6IDI1cHg7fVxuLm1ycHJpY2VtcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjZmE4MTUyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByaWNlbXAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogI2ZhODE1MjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idXRrbW9yZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG4ua25vd19tb3JlIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgY29sb3I6ICMwMDdjOWQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uU2hvcEJ5UHJvZHVjdHMge2JhY2tncm91bmQ6ICNmNWY3ZmM7fVxuLmdyaWQtaXRlbS1pbm5lcmhhIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmRlc2hhIHtcbiAgICBtYXJnaW46N3B4IDA7XG59XG4uY2F0ZWdvcnlfbmFtZWhhe2ZvbnQtc2l6ZTogMjBweDtjb2xvcjogIzAwN2M5ZDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4vKmZvbnQtd2VpZ2h0OiBib2xkO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xucGFkZGluZy10b3A6MTVweDtcbmxpbmUtaGVpZ2h0OjIwcHg7bWFyZ2luOiAwO31cblxuLnZpZXdhbGx7YmFja2dyb3VuZDogd2hpdGU7XG5jb2xvcjogI2VhNWIyNDtcbnBhZGRpbmc6IDhweCAyMHB4O1xuZm9udC1zaXplOiAxNHB4O1xuYm9yZGVyLXJhZGl1czogMjBweDtcbm1hcmdpbjogMzBweCBhdXRvO1xudGV4dC1hbGlnbjogY2VudGVyO1xuYm9yZGVyOiAxcHggc29saWQ7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO31cbi50b3BSYXRlZFByb2R1Y3RzIC52aWV3YWxse2NvbG9yOiAjMDA3YzlkO31cbi5yYWRncmlkdGVzdCB7Zm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAucHJpY2VsYmx7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTWVkaXVtJztcbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuICB9XG59XG4ucmFkZ3JpZHRlc3Rib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBpbWcge1xuICAgIG1heC13aWR0aDogNDAlO1xuICB9XG59XG4ubWFqb3JjaXR5IHtcbiAgYmFja2dyb3VuZDogIzNmM2YzZjtcbn1cbi5tY2l0eSB7bGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFqb3JjaXR5e1xuICBiYWNrZ3JvdW5kOiAjM2YzZjNmO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi5tY2l0eXR7ZmxvYXQ6bGVmdDt9XG5cbi5zZWFyY2hiYXItaW5wdXQge1xuICAgIGJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZjQ3ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDhmNDcgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmN0LWhlYWRlci1tYWlue1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkLWl0ZW0taW5uZXItbmV3IHtcbn1cbi51cHRvcG1we3BhZGRpbmc6IDAgMTBweDt9XG4uY2F0ZWdvcnlfbmFtZXBve1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5kZXNtcCB1bHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmRlc21wIGxpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi8uLi9hc3NldHMvYnVsX2Noay5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtsaXN0LXN0eWxlOiBub25lO2ZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5idXRrbW9yZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5rbm93X21vcmUge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBjb2xvcjogIzAwN2M5ZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2M5ZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDt9XG59XG4ubWlke1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAwcHggOHB4IDEwcHg7XG4gICAgbWFyZ2luOiAxNnB4IDhweCAyMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4IDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyMHB4O1xuICAgIFxufVxuLm1pZC5zZWNvbmR7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czowcHggO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoyMHB4IDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjIwcHg7XG59XG4udXB0b3BtcHRvcCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA3cHggMDtcbn1cbi51cHRvcG1wcHJpY2V7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGNvbG9yOnJlZDtcbn1cblxuLmJ1dGJvb2sge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAua25vd19tb3JlIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2M5ZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2M5ZDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cbi5wcm9zZWN7cGFkZGluZzoyMHB4IDEwcHg7fVxuLmRpc2NvdW50ZHtiYWNrZ3JvdW5kOiAjM2M0MjUyO1xuY29sb3I6ICNmZmY7XG5tYXJnaW46IDA7XG5wYWRkaW5nOiAwO31cbi5kaXNjb3VudGQgaDV7bWFyZ2luOiAwO1xucGFkZGluZzo4cHggMDtcbmZvbnQtc2l6ZTogMTVweDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO2ZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG5mb250LXNpemU6IDE0cHg7fVxuLnByaWNlbGJsIGl7ICBmb250LWZhbWlseTogYXJpYWwgO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNoYSB7XG4gIGhlaWdodDo1NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnJhZGl0ZXN0Y29uIHtcbiAgcGFkZGluZzogMjBweCAwIDEwcHg7XG59XG4udGFncyBkaXYge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uY2VydHh0e2NvbG9yOiAjZmZmO3RleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtc2l6ZTogMjJweDttYXJnaW4tYm90dG9tOiAxMHB4O31cbi5jZXJ0eHQgc3Bhbntmb250LXdlaWdodDogYm9sZDt9XG5cbi5tYWluX3NsaWRlcnsgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYW5uZXIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3Zlcjt9IiwiLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDE0NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAxMHB4O1xufVxuXG4uc2VhcmNoLXRhZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5zZWFyY2gtdGFnIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zZWFyY2gtdGFnIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cblxuLnRhZ3Mge1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIG1hcmdpbjogOHB4IDAgMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50YWdzIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTViMjQ7XG59XG4udGFncyBzcGFuIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNlYTViMjQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0b3A6IDJweDtcbn1cblxuLnRlc3Qtc2VhcmNoLWl0ZW0ge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IGF1dG87XG59XG4udGVzdC1zZWFyY2gtaXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi50ZXN0LXNlYXJjaC1pdGVtIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4udGVzdC1zZWFyY2gtaXRlbSBpb24tbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi50ZXN0LXNlYXJjaC1pdGVtIHAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRlc3Qtc2VhcmNoLWl0ZW0gc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnBpbmNvZGUtc2VhcmNoLWl0ZW0ge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IGF1dG87XG59XG4ucGluY29kZS1zZWFyY2gtaXRlbSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuLnBpbmNvZGUtc2VhcmNoLWl0ZW0gaW9uLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4ucGluY29kZS1zZWFyY2gtaXRlbSBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMzUlO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cblxuLmFkZHRvbW9yZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLmJvb2tub3cge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICAvKi0tYmFja2dyb3VuZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsqL1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jYXRlZ29yeV9uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMjQ1cHg7XG4gIGhlaWdodDogNTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXRlZ29yeV9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2F0ZWdvcnlfZGVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XG59XG5cbi5wcmljZSB7XG4gIGNvbG9yOiAjZWE1YjI0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2F0ZWdvcmllcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9kZW1vLmNhc2V0aGVtZXMubmV0L29yZ2FuaW8vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDMvYmctc2VjdGlvbjcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4ucHJvZHVjdF9yZXZpZXcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2sgcnVieTtcbn1cblxuLmNvbHByb2QubWwtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDE1cHggMjVweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNXB4IDEwcHg7XG59XG5cbi53aHljaG9vc2V1cyB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cblxuLlNob3BCeVByb2R1Y3RzIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5hZGR0b2NhcnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNlYTViMjQ7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogNHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZnJlcXVlbnRseXRvcFByb2R1Y3RzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3BvcF9jb250YmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKi5ncmlkLWl0ZW0taW5uZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDhweCAxMHB4O1xufSovXG4ucG9waW1nIHtcbiAgd2lkdGg6IDEwOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmVsZW1lbnRvci13aWRnZXQtY3RfZmFuY3lfYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wX3BrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi50b3BSYXRlZFByb2R1Y3RzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWlkIC5kaXNjb3VudCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLm1pZCAuZGlzY291bnQgaDUge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGJhY2tncm91bmQ6ICMzYzQyNTI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5taWQuc2Vjb25kIC5kaXNjb3VudCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLm1pZC5zZWNvbmQgLmRpc2NvdW50IGg1IHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBiYWNrZ3JvdW5kOiAjM2M0MjUyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b3BSYXRlZFByb2R1Y3RzIC5ncmlkLWl0ZW0taW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLnVwdG9wbXAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi51cHRvcG1wIGltZyB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLm1wb3BpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA0MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jYXRlZ29yeV9uYW1lbXAge1xuICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4ucGFyYW1ldGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRlc21wLnVwdG9wbXAgdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTVweDtcbn1cblxuLmRlc21wIGxpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2J1bF9jaGsucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4ubXJwcmljZW1wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICNmYTgxNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpY2VtcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmYTgxNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0a21vcmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmtub3dfbW9yZSB7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLlNob3BCeVByb2R1Y3RzIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYztcbn1cblxuLmdyaWQtaXRlbS1pbm5lcmhhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVzaGEge1xuICBtYXJnaW46IDdweCAwO1xufVxuXG4uY2F0ZWdvcnlfbmFtZWhhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwN2M5ZDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICAvKmZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyovXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udmlld2FsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogI2VhNWIyNDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvcFJhdGVkUHJvZHVjdHMgLnZpZXdhbGwge1xuICBjb2xvcjogIzAwN2M5ZDtcbn1cblxuLnJhZGdyaWR0ZXN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJhZGdyaWR0ZXN0IC5wcmljZWxibCB7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG59XG4ucmFkZ3JpZHRlc3QgLnByaWNlbGJsIHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5yYWRncmlkdGVzdGJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDAgMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmFkZ3JpZHRlc3Rib3ggaW1nIHtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG5cbi5tYWpvcmNpdHkge1xuICBiYWNrZ3JvdW5kOiAjM2YzZjNmO1xufVxuXG4ubWNpdHkge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1ham9yY2l0eSB7XG4gIGJhY2tncm91bmQ6ICMzZjNmM2Y7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4ubWNpdHl0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjRkZGICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDhmNDcgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDhmNDcgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jdC1oZWFkZXItbWFpbiB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udXB0b3BtcCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmNhdGVnb3J5X25hbWVwbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmRlc21wIHVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5kZXNtcCBsaSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9idWxfY2hrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmJ1dGttb3JlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1dGttb3JlIC5rbm93X21vcmUge1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiAjMDA3YzlkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YzlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5taWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDhweCAxMHB4O1xuICBtYXJnaW46IDE2cHggOHB4IDIwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5taWQuc2Vjb25kIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbn1cblxuLnVwdG9wbXB0b3Age1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogN3B4IDA7XG59XG5cbi51cHRvcG1wcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnV0Ym9vayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idXRib29rIC5rbm93X21vcmUge1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDA3YzlkO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YzlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wcm9zZWMge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbi5kaXNjb3VudGQge1xuICBiYWNrZ3JvdW5kOiAjM2M0MjUyO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGlzY291bnRkIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcmljZWxibCBpIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlc2hhIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmFkaXRlc3Rjb24ge1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcbn1cblxuLnRhZ3MgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNlcnR4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNlcnR4dCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYWluX3NsaWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYW5uZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/pages/profile-modal/profile-modal.page */
    "./src/app/pages/profile-modal/profile-modal.page.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var flatted__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! flatted */
    "./node_modules/flatted/esm/index.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(geolocation, router, api, util, modalController, navCtrl, alertCtrl, menu, http) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.geolocation = geolocation;
        this.router = router;
        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.http = http;
        this.banners = [];
        this.isLoaded = false;
        this.row_1_banner = [];
        this.slideOpts = {
          slidesPerView: 4,
          pagination: true,
          autoplay: true,
          pager: true
        };
        this.slideOpts2 = {
          slidesPerView: 4,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 10
        };
        this.slideOpts3 = {
          slidesPerView: 4,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 10
        };
        this.slideOpts4 = {
          slidesPerView: 4,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 8
        };
        this.slideOpts5 = {
          slidesPerView: 4,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 10
        };
        this.slideOptsmob2 = {
          slidesPerView: 1,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 10
        };
        this.slideOptsmob3 = {
          slidesPerView: 1,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 10
        };
        this.slideOptsmob4 = {
          slidesPerView: 1,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 10
        };
        this.slideOptsmob5 = {
          slidesPerView: 1,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 10
        };
        this.users = [];
        this.labs = [];
        this.bookings = [];
        this.all_tests = [];
        this.all_pincodes = [];
        this.cities = [];
        this.states = [];
        this.all_test = [];
        this.all_labs = [];
        this.testLoad = false;
        this.pincodeLoad = false;
        this.terms = '';
        this.pincode = '';
        this.addToBucket = [];
        this.deliveries_pincode = [];
        this.habbits = [];
        this.risks = [];
        this.secondary_labs = [];
        this.associated_test = [];
        this.pushSecondaryLabs = [];
        this.finalLabs = [];
        this.reviews = [];
        this.facilities = [];
        this.associated_tests = [];
        this.primary_lab = [];
        this.total_lab = [];
        this.popular_tests = [];
        this.popular_packages = [];
        this.newBucketArray = [];
        this.cardiology_test = [];
        this.radiology_test = [];
        this.city = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].major; // this.getAssociatedTests();

        this.getPrimaryLabs();
        this.getLabsCount();
        this.getPopularTest();
        this.getPopularPackage();
        this.getFacilities();
        this.getReviews();
        this.getCardiologyTest();
        this.getRadiologyTest();
        this.getBookings();
        this.getAllTest();
        this.getAllPincodes(); // this.getAllSecondaryLabs();

        this.api.getStates().then(function (data) {
          _this.states = data;
        }).catch(function (error) {
          console.log(error);
        });
        this.util.subscribeCityLocation().subscribe(function (data) {
          _this.getCity(data);
        });
        this.util.subscribeStateLocation().subscribe(function (data) {
          _this.getStateId(data);
        });
        this.util.subscribeQuery().subscribe(function (data) {
          _this.openQuery();
        });
        this.menu.enable(true);
        this.mobile = localStorage.getItem('mobile');
        this.api.getCitiesForHome().then(function (data) {
          _this.cities = data;
          console.log(_this.cities);
        }).catch(function (error) {
          console.log(error);
        });
        this.api.getWebBanners().then(function (data) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var x = _step.value;
              console.log(data);

              if (x.page_name == 'row_1') {
                _this.row_1_banner.push(x);

                console.log(_this.row_1_banner);
              } else if (x.page_name == 'row_2') {
                _this.row_2_banner = x.banner;
                console.log(_this.row_2_banner);
              } // } else if(x.page_name == 'row_3_col_1') {
              //   this.row_3_col_1_banner = x;
              // } else if(x.page_name == 'row_3_col_2') {
              //   this.row_3_col_2_banner = x;
              // }

            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }).catch(function (error) {
          console.log(error);
        });
        var uid = sessionStorage.getItem('uid');
        this.api.getMyProfile(uid).then(function (data) {
          _this.profile = data;
          console.log(_this.profile);

          if (_this.profile.name == '') {
            console.log(_this.profile.name);

            _this.openModal();
          }
        }, function (error) {
          console.log(error);
        }).catch(function (error) {
          console.log(error);
        });
      }

      _createClass(HomePage, [{
        key: "openModal",
        value: function openModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_8__["ProfileModalPage"],
                      cssClass: 'profileCss',
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getPrimaryLabs",
        value: function getPrimaryLabs() {
          var _this2 = this;

          this.api.getPrimaryLab().then(function (data) {
            _this2.primary_lab = data;
            console.log(_this2.primary_lab);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getLabsCount",
        value: function getLabsCount() {
          var _this3 = this;

          this.api.getLabCount().then(function (data) {
            _this3.total_lab = data;
            console.log(_this3.primary_lab);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getAssociatedTests",
        value: function getAssociatedTests() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.api.getAssociatedTests().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log(data);
                                this.associated_tests = data;

                              case 2:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getFacilities",
        value: function getFacilities() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.api.getFacilities().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                console.log(data);
                                this.facilities = data;

                              case 2:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          var _this6 = this;

          this.api.getReviews().then(function (data) {
            // console.log(data);
            _this6.reviews = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getPopularTest",
        value: function getPopularTest() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.api.getHomeIndividualPopularTest().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee6() {
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                this.popular_tests = data;

                                if (data.length > 0) {
                                  this.popular_tests.forEach(function (element) {
                                    element.mrp = element.mrp == undefined ? 0 : element.mrp;
                                    element.labs = element.labs == undefined ? 0 : element.labs;
                                    element.price = element.price == undefined ? 0 : element.price;
                                  });
                                }

                                console.log(this.popular_tests);

                              case 3:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getPopularPackage",
        value: function getPopularPackage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.api.getMostPopularPackage().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee8() {
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                this.popular_packages = data;

                                if (data.length > 0) {
                                  this.popular_packages.forEach(function (element) {
                                    element.mrp = element.mrp == undefined ? 0 : element.mrp;
                                    element.labs = element.labs == undefined ? 0 : element.labs;
                                    element.price = element.price == undefined ? 0 : element.price;
                                  });
                                }

                                console.log(this.popular_packages);

                              case 3:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getCardiologyTest",
        value: function getCardiologyTest() {
          var _this9 = this;

          this.api.getCardiologyTest().then(function (data) {
            _this9.cardiology_test = data; // console.log(this.cardiology_test)
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getRadiologyTest",
        value: function getRadiologyTest() {
          var _this10 = this;

          this.api.getRadiologyTest().then(function (data) {
            _this10.radiology_test = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getBookings",
        value: function getBookings() {
          var _this11 = this;

          this.api.getAllBookings().then(function (data) {
            _this11.bookings = data; // console.log(this.bookings)
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getAllSecondaryLabs",
        value: function getAllSecondaryLabs() {
          var _this12 = this;

          this.api.getAllSecondaryLabs().then(function (data) {
            _this12.labs = data;
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getAllTest",
        value: function getAllTest() {
          var _this13 = this;

          this.api.getAllTest().then(function (data) {
            _this13.all_tests = data;
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getAllPincodes",
        value: function getAllPincodes() {
          var _this14 = this;

          this.api.getAllPincodes().then(function (data) {
            _this14.all_pincodes = data; // console.log(this.all_pincodes)
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        } // doRefresh(event) {
        //   this.ionViewWillEnter();
        //   this.ngOnInit()
        //   setTimeout(() => {
        //     event.target.complete();
        //   }, 700);
        // }

      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this15 = this;

          this.addToBucket = [];
          this.newBucketArray = [];
          this.pincode = '';
          this.terms = '';
          this.getLocation();
          this.isLogin = sessionStorage.getItem('loginStatus');
          this.api.getIndividualTest().then(function (data) {
            _this15.all_test = data;
          }).catch(function (error) {
            console.log(error);
          });
          this.api.getSecondaryLabs().then(function (data) {
            _this15.all_labs = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.api.getHealthHabbits().then(function (data) {
            _this16.habbits = data;
          }).catch(function (error) {
            console.log(error);
          });
          this.api.getHealthRisk().then(function (data) {
            _this16.risks = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onInput",
        value: function onInput($event, value) {
          console.log(value);

          if (value == 'test') {
            this.testLoad = true;
            this.pincodeLoad = false;

            if ($event.detail == null && this.terms == '') {
              this.testLoad = false;
            }
          } else {
            this.pincodeLoad = true;
            this.testLoad = false;

            if ($event.detail == null && this.pincode == '') {
              this.pincodeLoad = false;
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel($event, value) {
          if (value == 'test') {
            this.testLoad = false;
          } else {
            this.pincodeLoad = false;
          }
        }
      }, {
        key: "select",
        value: function select(data) {
          console.log(data);
          this.pincode = data.pincode;
          localStorage.setItem('pincode', this.pincode);
          this.pincodeLoad = false;
        }
      }, {
        key: "add",
        value: function add(data) {
          this.terms = '';
          this.testLoad = false;
          console.log(this.addToBucket.length);

          if (this.addToBucket.length == 0) {
            this.newBucketArray.push(data.test_name);
            this.addToBucket.push(data.id);
            console.log(this.newBucketArray, this.addToBucket);
          } else {
            var a = this.addToBucket.indexOf(data.id);

            if (a == 0) {
              this.util.showToast('Test already selected', 'primary', 'middle');
            } else if (a == -1) {
              this.newBucketArray.push(data.test_name);
              this.addToBucket.push(data.id);
              console.log(this.newBucketArray, this.addToBucket);
            } else {
              this.util.showToast('Test already selected', 'primary', 'middle');
            }
          }
        }
      }, {
        key: "remove",
        value: function remove(index) {
          this.newBucketArray.splice(index, 1);
          this.addToBucket.splice(index, 1);
          localStorage.setItem('newBucketArray', this.newBucketArray);
          localStorage.setItem('addToBucket', this.addToBucket);

          if (this.addToBucket.length == 0) {
            this.testLoad = false;
          }
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this17 = this;

          console.log('1');
          this.geolocation.getCurrentPosition().then(function (resp) {
            localStorage.setItem('lat', resp.coords.latitude.toString());
            localStorage.setItem('lng', resp.coords.longitude.toString());

            _this17.getAddress(resp.coords.latitude, resp.coords.longitude);
          }).catch(function (error) {
            console.log('Error getting location', error);
          }); // let watch = this.geolocation.watchPosition();
          // watch.subscribe((data) => {
          //   // console.log('live update', data);
          //   localStorage.setItem('lat', data.coords.latitude.toString());
          //   localStorage.setItem('lng', data.coords.longitude.toString());
          //   this.getAddress(data.coords.latitude, data.coords.longitude);
          // });
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }, {
        key: "getAddress",
        value: function getAddress(lat, lng) {
          var _this18 = this;

          // console.log(lat,lng)
          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(lat, lng);
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            // console.log(results)
            _this18.address = results[0].formatted_address; // console.log(this.address);  

            localStorage.setItem('address', results[0].formatted_address);
            var city;
            var state;
            var pincode;

            for (var i = 0; i < results[0].address_components.length; i++) {
              for (var b = 0; b < results[0].address_components[i].types.length; b++) {
                //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
                  //this is the object you are looking for
                  city = results[0].address_components[i];
                  break;
                }

                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                  //this is the object you are looking for
                  state = results[0].address_components[i];
                  break;
                }

                if (results[0].address_components[i].types[b] == "postal_code") {
                  //this is the object you are looking for
                  pincode = results[0].address_components[i];
                  console.log(pincode);
                  break;
                }
              }
            }

            var current_pincode = pincode.short_name; //city data

            var current_city = city.short_name;
            var current_state = state.long_name;

            _this18.getCity(current_city);

            _this18.getStateId(current_state);

            localStorage.setItem('current_pincode', current_pincode);
            localStorage.setItem('current_city', current_city);
            localStorage.setItem('current_state', current_state);
            console.log('trigger event');

            _this18.util.publishCityLocation(current_city);

            _this18.util.subscribeCity().subscribe(function (data) {
              console.log(data);

              _this18.getCity(data);
            });
          });
        }
      }, {
        key: "getCity",
        value: function getCity(data) {
          var _this19 = this;

          this.api.getCityByCityName(data).then(function (data) {
            // console.log(data);
            if (data && data.length) {
              _this19.getPincode(data[0].id);
            }
          }).catch(function (error) {
            console.log(error);

            _this19.util.errorToast(_this19.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getPincode",
        value: function getPincode(id) {
          var _this20 = this;

          this.deliveries_pincode = [];
          this.pincodeLoad = false;
          this.api.getPincodeByCityId(id).then(function (data) {
            // console.log(data);
            if (data && data.length) {
              console.log(data);
              _this20.deliveries_pincode = data;
            }
          }).catch(function (error) {
            console.log(error);

            _this20.util.errorToast(_this20.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getStateId",
        value: function getStateId(state) {
          // console.log(state)
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.states[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var x = _step2.value;

              if (x.name == state) {
                // console.log(x.id)
                localStorage.setItem('state_id', x.id);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
        /*book(data){
          this.addToBucket.push(data.id);
          this.newBucketArray.push(data.test_name)
          localStorage.setItem('addToBucket',this.addToBucket);
          localStorage.setItem('newBucketArray',this.newBucketArray);
          this.pincode = localStorage.getItem('pincode');
          if(this.pincode == undefined){
            this.pincode = localStorage.getItem('current_pincode');
          }
          this.searchLabs2();
        }*/

      }, {
        key: "book",
        value: function book(data) {
          var prdexist = false;

          if (this.addToBucket.length > 0) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = this.addToBucket[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var x = _step3.value;

                if (x == data.id) {
                  prdexist = true;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }

          if (prdexist == false) {
            this.util.showToast('Test added in search bar, Please enter your pincode', 'primary', 'middle');
            this.addToBucket.push(data.id);
            this.newBucketArray.push(data.test_name);
            localStorage.setItem('addToBucket', this.addToBucket);
            localStorage.setItem('newBucketArray', this.newBucketArray);
          } else {
            this.util.showToast('Test already selected in search bar, Please enter your pincode', 'danger', 'middle');
          }

          this.pincode = localStorage.getItem('pincode');

          if (this.pincode == undefined) {
            this.pincode = localStorage.getItem('current_pincode');
          }

          console.log(this.addToBucket);
          console.log(this.newBucketArray); // this.searchLabs2();
        }
      }, {
        key: "searchLabs2",
        value: function searchLabs2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var _this21 = this;

            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    if (!(this.addToBucket.length === 0)) {
                      _context15.next = 5;
                      break;
                    }

                    this.util.showToast('Select your test', 'danger', 'bottom');
                    return _context15.abrupt("return", false);

                  case 5:
                    if (!(this.pincode === '' || this.pincode == null)) {
                      _context15.next = 8;
                      break;
                    }

                    this.util.showToast('Pincode is required', 'danger', 'bottom');
                    return _context15.abrupt("return", false);

                  case 8:
                    console.log(this.pincode);
                    _context15.next = 11;
                    return this.api.getSecondaryLabsByPin(this.pincode).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this21, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee14() {
                        var _this22 = this;

                        var i;
                        return regeneratorRuntime.wrap(function _callee14$(_context14) {
                          while (1) {
                            switch (_context14.prev = _context14.next) {
                              case 0:
                                this.secondary_labs = data;

                                if (!(this.secondary_labs.length === 0)) {
                                  _context14.next = 4;
                                  break;
                                }

                                this.util.showToast('There are no labs found for this pincode', 'danger', 'bottom');
                                return _context14.abrupt("return", false);

                              case 4:
                                console.log(this.secondary_labs);
                                console.log(this.addToBucket);
                                this.associated_test = [];

                                if (!data) {
                                  _context14.next = 13;
                                  break;
                                }

                                i = 1;
                                _context14.next = 11;
                                return this.secondary_labs.forEach(function (element) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this22, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee13() {
                                    var _this23 = this;

                                    var j, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, y;

                                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                      while (1) {
                                        switch (_context13.prev = _context13.next) {
                                          case 0:
                                            console.log(element.primarylab);
                                            _context13.next = 3;
                                            return this.api.getVenueDetails(element.primarylab).then(function (data6) {
                                              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0,
                                              /*#__PURE__*/
                                              regeneratorRuntime.mark(function _callee10() {
                                                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                                  while (1) {
                                                    switch (_context10.prev = _context10.next) {
                                                      case 0:
                                                        console.log(data6);

                                                        if (data6) {
                                                          element.primarylabdata = data6;
                                                          element.primarylogo = data6.logo;
                                                        }

                                                      case 2:
                                                      case "end":
                                                        return _context10.stop();
                                                    }
                                                  }
                                                }, _callee10);
                                              }));
                                            }).catch(function (error) {
                                              _this23.util.hide();

                                              console.log(error);
                                            });

                                          case 3:
                                            console.log(element);
                                            j = 1;
                                            _iteratorNormalCompletion4 = true;
                                            _didIteratorError4 = false;
                                            _iteratorError4 = undefined;
                                            _context13.prev = 8;
                                            _iterator4 = this.addToBucket[Symbol.iterator]();

                                          case 10:
                                            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                              _context13.next = 19;
                                              break;
                                            }

                                            y = _step4.value;
                                            console.log(y);
                                            _context13.next = 15;
                                            return this.api.getAssociatedTestByProductAndBranch(element.uid, y).then(function (data1) {
                                              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0,
                                              /*#__PURE__*/
                                              regeneratorRuntime.mark(function _callee12() {
                                                var _this24 = this;

                                                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                                  while (1) {
                                                    switch (_context12.prev = _context12.next) {
                                                      case 0:
                                                        console.log(data1);

                                                        if (!(data1.length > 0)) {
                                                          _context12.next = 6;
                                                          break;
                                                        }

                                                        _context12.next = 4;
                                                        return this.api.getLabTestById(data1[0].individual_test).then(function (data2) {
                                                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0,
                                                          /*#__PURE__*/
                                                          regeneratorRuntime.mark(function _callee11() {
                                                            return regeneratorRuntime.wrap(function _callee11$(_context11) {
                                                              while (1) {
                                                                switch (_context11.prev = _context11.next) {
                                                                  case 0:
                                                                    if (data2.length > 0) {
                                                                      data1[0].itid = data2[0];
                                                                    }

                                                                  case 1:
                                                                  case "end":
                                                                    return _context11.stop();
                                                                }
                                                              }
                                                            }, _callee11);
                                                          }));
                                                        }).catch(function (error) {
                                                          _this24.util.hide();

                                                          console.log(error);
                                                        });

                                                      case 4:
                                                        this.associated_test.push(data1[0]);
                                                        console.log(i + "==" + this.secondary_labs.length + "&&" + j + "==" + this.addToBucket.length);

                                                      case 6:
                                                        if (!(i == this.secondary_labs.length && j == this.addToBucket.length)) {
                                                          _context12.next = 9;
                                                          break;
                                                        }

                                                        _context12.next = 9;
                                                        return this.searchLabs3();

                                                      case 9:
                                                      case "end":
                                                        return _context12.stop();
                                                    }
                                                  }
                                                }, _callee12, this);
                                              }));
                                            }).catch(function (error) {
                                              _this23.util.hide();

                                              console.log(error);
                                            });

                                          case 15:
                                            j++;

                                          case 16:
                                            _iteratorNormalCompletion4 = true;
                                            _context13.next = 10;
                                            break;

                                          case 19:
                                            _context13.next = 25;
                                            break;

                                          case 21:
                                            _context13.prev = 21;
                                            _context13.t0 = _context13["catch"](8);
                                            _didIteratorError4 = true;
                                            _iteratorError4 = _context13.t0;

                                          case 25:
                                            _context13.prev = 25;
                                            _context13.prev = 26;

                                            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                              _iterator4.return();
                                            }

                                          case 28:
                                            _context13.prev = 28;

                                            if (!_didIteratorError4) {
                                              _context13.next = 31;
                                              break;
                                            }

                                            throw _iteratorError4;

                                          case 31:
                                            return _context13.finish(28);

                                          case 32:
                                            return _context13.finish(25);

                                          case 33:
                                            if (!(i == this.secondary_labs.length && this.associated_test.length == 0)) {
                                              _context13.next = 36;
                                              break;
                                            }

                                            _context13.next = 36;
                                            return this.searchLabs3();

                                          case 36:
                                            i++;

                                          case 37:
                                          case "end":
                                            return _context13.stop();
                                        }
                                      }
                                    }, _callee13, this, [[8, 21, 25, 33], [26,, 28, 32]]);
                                  }));
                                });

                              case 11:
                                _context14.next = 15;
                                break;

                              case 13:
                                _context14.next = 15;
                                return this.searchLabs3();

                              case 15:
                              case "end":
                                return _context14.stop();
                            }
                          }
                        }, _callee14, this);
                      }));
                    }).catch(function (error) {
                      _this21.util.hide();

                      console.log(error);
                    });

                  case 11:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "searchLabs5",
        value: function searchLabs5() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var _this25 = this;

            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.api.getSecondaryLabsByPin(this.pincode).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this25, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee18() {
                        var _this26 = this;

                        var i;
                        return regeneratorRuntime.wrap(function _callee18$(_context18) {
                          while (1) {
                            switch (_context18.prev = _context18.next) {
                              case 0:
                                console.log(data);
                                this.secondary_labs = data;
                                this.associated_test = [];

                                if (!data) {
                                  _context18.next = 7;
                                  break;
                                }

                                i = 1;
                                _context18.next = 7;
                                return this.secondary_labs.forEach(function (element) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this26, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee17() {
                                    var _this27 = this;

                                    var j, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, y;

                                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                                      while (1) {
                                        switch (_context17.prev = _context17.next) {
                                          case 0:
                                            j = 1;
                                            _iteratorNormalCompletion5 = true;
                                            _didIteratorError5 = false;
                                            _iteratorError5 = undefined;
                                            _context17.prev = 4;
                                            _iterator5 = this.addToBucket[Symbol.iterator]();

                                          case 6:
                                            if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                                              _context17.next = 14;
                                              break;
                                            }

                                            y = _step5.value;
                                            _context17.next = 10;
                                            return this.api.getAssociatedTestByProductAndBranch(element.uid, y).then(function (data1) {
                                              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this27, void 0, void 0,
                                              /*#__PURE__*/
                                              regeneratorRuntime.mark(function _callee16() {
                                                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                                                  while (1) {
                                                    switch (_context16.prev = _context16.next) {
                                                      case 0:
                                                        console.log(data1);

                                                        if (!(data1.length > 0)) {
                                                          _context16.next = 7;
                                                          break;
                                                        }

                                                        this.associated_test.push(data1[0]);
                                                        console.log(i + "==" + this.secondary_labs.length + "&&" + j + "==" + this.addToBucket.length);

                                                        if (!(i == this.secondary_labs.length && j == this.addToBucket.length)) {
                                                          _context16.next = 7;
                                                          break;
                                                        }

                                                        _context16.next = 7;
                                                        return this.searchLabs3();

                                                      case 7:
                                                      case "end":
                                                        return _context16.stop();
                                                    }
                                                  }
                                                }, _callee16, this);
                                              }));
                                            }).catch(function (error) {
                                              _this27.util.hide();

                                              console.log(error);
                                            });

                                          case 10:
                                            j++;

                                          case 11:
                                            _iteratorNormalCompletion5 = true;
                                            _context17.next = 6;
                                            break;

                                          case 14:
                                            _context17.next = 20;
                                            break;

                                          case 16:
                                            _context17.prev = 16;
                                            _context17.t0 = _context17["catch"](4);
                                            _didIteratorError5 = true;
                                            _iteratorError5 = _context17.t0;

                                          case 20:
                                            _context17.prev = 20;
                                            _context17.prev = 21;

                                            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                              _iterator5.return();
                                            }

                                          case 23:
                                            _context17.prev = 23;

                                            if (!_didIteratorError5) {
                                              _context17.next = 26;
                                              break;
                                            }

                                            throw _iteratorError5;

                                          case 26:
                                            return _context17.finish(23);

                                          case 27:
                                            return _context17.finish(20);

                                          case 28:
                                            if (!(i == this.secondary_labs.length && this.associated_test.length == 0)) {
                                              _context17.next = 31;
                                              break;
                                            }

                                            _context17.next = 31;
                                            return this.searchLabs3();

                                          case 31:
                                            i++;

                                          case 32:
                                          case "end":
                                            return _context17.stop();
                                        }
                                      }
                                    }, _callee17, this, [[4, 16, 20, 28], [21,, 23, 27]]);
                                  }));
                                });

                              case 7:
                              case "end":
                                return _context18.stop();
                            }
                          }
                        }, _callee18, this);
                      }));
                    }).catch(function (error) {
                      _this25.util.hide();

                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "searchLabs3",
        value: function searchLabs3() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            var _this28 = this;

            var lat, lng, geocoder, address, newSortedArray, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, x, circularReplacer, arr, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, _x5, jsonString;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    if (!(this.addToBucket.length === 0)) {
                      _context21.next = 5;
                      break;
                    }

                    this.util.showToast('Select your test', 'danger', 'bottom');
                    return _context21.abrupt("return", false);

                  case 5:
                    if (!(this.pincode === '')) {
                      _context21.next = 8;
                      break;
                    }

                    this.util.showToast('Pincode is required', 'danger', 'bottom');
                    return _context21.abrupt("return", false);

                  case 8:
                    this.util.show('Please wait....');

                    if (!(this.pincode == localStorage.getItem('current_pincode'))) {
                      _context21.next = 14;
                      break;
                    }

                    lat = localStorage.getItem('lat');
                    lng = localStorage.getItem('lng');
                    _context21.next = 18;
                    break;

                  case 14:
                    geocoder = new google.maps.Geocoder();
                    address = this.pincode;
                    _context21.next = 18;
                    return geocoder.geocode({
                      'address': address
                    }, function (results, status) {
                      if (status == google.maps.GeocoderStatus.OK) {
                        var latitude = results[0].geometry.location.lat();
                        var longitude = results[0].geometry.location.lng();
                        lat = latitude;
                        lng = longitude; // alert("Latitude: " + latitude + "\nLongitude: " + longitude);
                      } else {
                        alert("Request failed.");
                      }
                    });

                  case 18:
                    console.log(this.secondary_labs); // console.log(this.associated_test);

                    _context21.next = 21;
                    return this.secondary_labs.forEach(function (element) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this28, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee20() {
                        var price, selling_price, all_test_data, all_test1_data, available_test, not_available_test, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _x, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _x2, is_available, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, y, test2data, difference, average_rating, distance, rating_array, facilities, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _x3, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _y, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _x4, avgrate, rating_length, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, x;

                        return regeneratorRuntime.wrap(function _callee20$(_context20) {
                          while (1) {
                            switch (_context20.prev = _context20.next) {
                              case 0:
                                price = 0;
                                selling_price = 0;
                                all_test_data = [];
                                all_test1_data = [];
                                available_test = [];
                                not_available_test = [];
                                console.log(this.associated_test);
                                _iteratorNormalCompletion6 = true;
                                _didIteratorError6 = false;
                                _iteratorError6 = undefined;
                                _context20.prev = 10;

                                for (_iterator6 = this.associated_test[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                  _x = _step6.value;

                                  if (_x.branch_id == element.uid) {
                                    console.log('available data');
                                    all_test_data.push(_x);
                                    available_test.push(_x.itid.test_name);
                                    price += _x.price;
                                    selling_price += _x.selling_price;
                                  }
                                }

                                _context20.next = 18;
                                break;

                              case 14:
                                _context20.prev = 14;
                                _context20.t0 = _context20["catch"](10);
                                _didIteratorError6 = true;
                                _iteratorError6 = _context20.t0;

                              case 18:
                                _context20.prev = 18;
                                _context20.prev = 19;

                                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                                  _iterator6.return();
                                }

                              case 21:
                                _context20.prev = 21;

                                if (!_didIteratorError6) {
                                  _context20.next = 24;
                                  break;
                                }

                                throw _iteratorError6;

                              case 24:
                                return _context20.finish(21);

                              case 25:
                                return _context20.finish(18);

                              case 26:
                                _iteratorNormalCompletion7 = true;
                                _didIteratorError7 = false;
                                _iteratorError7 = undefined;
                                _context20.prev = 29;
                                _iterator7 = this.addToBucket[Symbol.iterator]();

                              case 31:
                                if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                                  _context20.next = 59;
                                  break;
                                }

                                _x2 = _step7.value;
                                is_available = false;
                                console.log(_x2);
                                _iteratorNormalCompletion11 = true;
                                _didIteratorError11 = false;
                                _iteratorError11 = undefined;
                                _context20.prev = 38;

                                for (_iterator11 = all_test_data[Symbol.iterator](); !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                  y = _step11.value;
                                  console.log(_x2 + "==" + y.individual_test);

                                  if (_x2 == y.individual_test) {
                                    is_available = true;
                                  }
                                }

                                _context20.next = 46;
                                break;

                              case 42:
                                _context20.prev = 42;
                                _context20.t1 = _context20["catch"](38);
                                _didIteratorError11 = true;
                                _iteratorError11 = _context20.t1;

                              case 46:
                                _context20.prev = 46;
                                _context20.prev = 47;

                                if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                                  _iterator11.return();
                                }

                              case 49:
                                _context20.prev = 49;

                                if (!_didIteratorError11) {
                                  _context20.next = 52;
                                  break;
                                }

                                throw _iteratorError11;

                              case 52:
                                return _context20.finish(49);

                              case 53:
                                return _context20.finish(46);

                              case 54:
                                console.log(is_available);

                                if (is_available == false) {
                                  all_test1_data.push(_x2);
                                }

                              case 56:
                                _iteratorNormalCompletion7 = true;
                                _context20.next = 31;
                                break;

                              case 59:
                                _context20.next = 65;
                                break;

                              case 61:
                                _context20.prev = 61;
                                _context20.t2 = _context20["catch"](29);
                                _didIteratorError7 = true;
                                _iteratorError7 = _context20.t2;

                              case 65:
                                _context20.prev = 65;
                                _context20.prev = 66;

                                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                                  _iterator7.return();
                                }

                              case 68:
                                _context20.prev = 68;

                                if (!_didIteratorError7) {
                                  _context20.next = 71;
                                  break;
                                }

                                throw _iteratorError7;

                              case 71:
                                return _context20.finish(68);

                              case 72:
                                return _context20.finish(65);

                              case 73:
                                console.log(all_test1_data);
                                test2data = []; //newBucketArray

                                difference = this.newBucketArray.filter(function (x) {
                                  return !available_test.includes(x);
                                });
                                not_available_test.push(difference);
                                test2data.push(difference); // for(var x of this.newBucketArray){
                                //   for(var y of available_test){
                                //     if(x.trim() != y.trim()){
                                //       not_available_test.push(x.trim());
                                //       test2data.push(x);
                                //     }
                                //   }
                                // }
                                // for (let x of this.associated_tests){
                                //   for(var y of all_test1_data){
                                //     if(x.individual_test == y){
                                //       test2data.push(x);
                                //       not_available_test.push(x.itid.test_name);
                                //     }
                                //   }
                                // } 

                                all_test1_data = test2data;
                                average_rating = 0;
                                element.test_data = all_test_data;
                                element.test1_data = all_test1_data;
                                element.available_test = available_test;
                                element.not_available_test = not_available_test;
                                element.price = price;
                                element.selling_price = selling_price;
                                _context20.next = 88;
                                return this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);

                              case 88:
                                distance = _context20.sent;
                                element.distance = distance;
                                rating_array = [];
                                facilities = [];
                                _iteratorNormalCompletion8 = true;
                                _didIteratorError8 = false;
                                _iteratorError8 = undefined;
                                _context20.prev = 95;
                                _iterator8 = this.facilities[Symbol.iterator]();

                              case 97:
                                if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                                  _context20.next = 121;
                                  break;
                                }

                                _x3 = _step8.value;
                                _iteratorNormalCompletion12 = true;
                                _didIteratorError12 = false;
                                _iteratorError12 = undefined;
                                _context20.prev = 102;

                                for (_iterator12 = element.facility[Symbol.iterator](); !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                  _y = _step12.value;

                                  if (_x3.id == _y) {
                                    facilities.push(_x3);
                                  }
                                }

                                _context20.next = 110;
                                break;

                              case 106:
                                _context20.prev = 106;
                                _context20.t3 = _context20["catch"](102);
                                _didIteratorError12 = true;
                                _iteratorError12 = _context20.t3;

                              case 110:
                                _context20.prev = 110;
                                _context20.prev = 111;

                                if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                                  _iterator12.return();
                                }

                              case 113:
                                _context20.prev = 113;

                                if (!_didIteratorError12) {
                                  _context20.next = 116;
                                  break;
                                }

                                throw _iteratorError12;

                              case 116:
                                return _context20.finish(113);

                              case 117:
                                return _context20.finish(110);

                              case 118:
                                _iteratorNormalCompletion8 = true;
                                _context20.next = 97;
                                break;

                              case 121:
                                _context20.next = 127;
                                break;

                              case 123:
                                _context20.prev = 123;
                                _context20.t4 = _context20["catch"](95);
                                _didIteratorError8 = true;
                                _iteratorError8 = _context20.t4;

                              case 127:
                                _context20.prev = 127;
                                _context20.prev = 128;

                                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                                  _iterator8.return();
                                }

                              case 130:
                                _context20.prev = 130;

                                if (!_didIteratorError8) {
                                  _context20.next = 133;
                                  break;
                                }

                                throw _iteratorError8;

                              case 133:
                                return _context20.finish(130);

                              case 134:
                                return _context20.finish(127);

                              case 135:
                                console.log(facilities);
                                element.facilities = facilities;
                                _iteratorNormalCompletion9 = true;
                                _didIteratorError9 = false;
                                _iteratorError9 = undefined;
                                _context20.prev = 140;

                                for (_iterator9 = this.reviews[Symbol.iterator](); !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                  _x4 = _step9.value;

                                  if (_x4.lab_id == element.id) {
                                    rating_array.push(_x4);
                                  }
                                }

                                _context20.next = 148;
                                break;

                              case 144:
                                _context20.prev = 144;
                                _context20.t5 = _context20["catch"](140);
                                _didIteratorError9 = true;
                                _iteratorError9 = _context20.t5;

                              case 148:
                                _context20.prev = 148;
                                _context20.prev = 149;

                                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                                  _iterator9.return();
                                }

                              case 151:
                                _context20.prev = 151;

                                if (!_didIteratorError9) {
                                  _context20.next = 154;
                                  break;
                                }

                                throw _iteratorError9;

                              case 154:
                                return _context20.finish(151);

                              case 155:
                                return _context20.finish(148);

                              case 156:
                                element.total_reviews = 0;

                                if (!(rating_array.length > 0)) {
                                  _context20.next = 181;
                                  break;
                                }

                                avgrate = 0;
                                rating_length = rating_array.length;
                                _iteratorNormalCompletion10 = true;
                                _didIteratorError10 = false;
                                _iteratorError10 = undefined;
                                _context20.prev = 163;

                                for (_iterator10 = rating_array[Symbol.iterator](); !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                  x = _step10.value;
                                  avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                                }

                                _context20.next = 171;
                                break;

                              case 167:
                                _context20.prev = 167;
                                _context20.t6 = _context20["catch"](163);
                                _didIteratorError10 = true;
                                _iteratorError10 = _context20.t6;

                              case 171:
                                _context20.prev = 171;
                                _context20.prev = 172;

                                if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                                  _iterator10.return();
                                }

                              case 174:
                                _context20.prev = 174;

                                if (!_didIteratorError10) {
                                  _context20.next = 177;
                                  break;
                                }

                                throw _iteratorError10;

                              case 177:
                                return _context20.finish(174);

                              case 178:
                                return _context20.finish(171);

                              case 179:
                                average_rating = avgrate / rating_length;
                                element.total_reviews = rating_array.length;

                              case 181:
                                element.average_rating = average_rating;

                              case 182:
                              case "end":
                                return _context20.stop();
                            }
                          }
                        }, _callee20, this, [[10, 14, 18, 26], [19,, 21, 25], [29, 61, 65, 73], [38, 42, 46, 54], [47,, 49, 53], [66,, 68, 72], [95, 123, 127, 135], [102, 106, 110, 118], [111,, 113, 117], [128,, 130, 134], [140, 144, 148, 156], [149,, 151, 155], [163, 167, 171, 179], [172,, 174, 178]]);
                      }));
                    });

                  case 21:
                    console.log(this.secondary_labs); // return false;

                    this.secondary_labs.sort(this.compare);
                    newSortedArray = [];
                    _iteratorNormalCompletion13 = true;
                    _didIteratorError13 = false;
                    _iteratorError13 = undefined;
                    _context21.prev = 27;

                    for (_iterator13 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                      x = _step13.value;

                      if (x.test_data.length > 0) {
                        newSortedArray.push(x);
                      }
                    }

                    _context21.next = 35;
                    break;

                  case 31:
                    _context21.prev = 31;
                    _context21.t0 = _context21["catch"](27);
                    _didIteratorError13 = true;
                    _iteratorError13 = _context21.t0;

                  case 35:
                    _context21.prev = 35;
                    _context21.prev = 36;

                    if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                      _iterator13.return();
                    }

                  case 38:
                    _context21.prev = 38;

                    if (!_didIteratorError13) {
                      _context21.next = 41;
                      break;
                    }

                    throw _iteratorError13;

                  case 41:
                    return _context21.finish(38);

                  case 42:
                    return _context21.finish(35);

                  case 43:
                    this.secondary_labs = newSortedArray;
                    console.log(this.secondary_labs);
                    console.log(this.newBucketArray);
                    console.log(this.addToBucket);

                    circularReplacer = function circularReplacer() {
                      // Creating new WeakSet to keep 
                      // track of previously seen objects
                      var seen = new WeakSet();
                      return function (key, value) {
                        // If type of value is an 
                        // object or value is null
                        if (typeof value === "object" && value !== null) {
                          // If it has been seen before
                          if (seen.has(value)) {
                            return;
                          } // Add current value to the set


                          seen.add(value);
                        } // return the value


                        return value;
                      };
                    };

                    arr = [];
                    _iteratorNormalCompletion14 = true;
                    _didIteratorError14 = false;
                    _iteratorError14 = undefined;
                    _context21.prev = 52;

                    for (_iterator14 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                      _x5 = _step14.value;
                      arr.push({
                        address: _x5.address,
                        available_test: _x5.available_test,
                        cod: _x5.cod,
                        cover: _x5.cover,
                        distance: _x5.distance,
                        price: _x5.price,
                        selling_price: _x5.selling_price,
                        total_reviews: _x5.total_reviews,
                        facilities: _x5.facilities,
                        id: _x5.id,
                        lat: _x5.lat,
                        lng: _x5.lng,
                        name: _x5.name,
                        lab_timings: _x5.lab_timings,
                        not_available_test: _x5.not_available_test,
                        logo: _x5.logo,
                        range_price: _x5.range_price,
                        service_delivery: _x5.service_delivery,
                        test1_data: _x5.test1_data,
                        test_data: _x5.test_data,
                        free_charge: _x5.free_charge,
                        page_slug: _x5.page_slug,
                        primarylogo: _x5.primarylogo,
                        primarylabdata: _x5.primarylabdata
                      });
                    }

                    _context21.next = 60;
                    break;

                  case 56:
                    _context21.prev = 56;
                    _context21.t1 = _context21["catch"](52);
                    _didIteratorError14 = true;
                    _iteratorError14 = _context21.t1;

                  case 60:
                    _context21.prev = 60;
                    _context21.prev = 61;

                    if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                      _iterator14.return();
                    }

                  case 63:
                    _context21.prev = 63;

                    if (!_didIteratorError14) {
                      _context21.next = 66;
                      break;
                    }

                    throw _iteratorError14;

                  case 66:
                    return _context21.finish(63);

                  case 67:
                    return _context21.finish(60);

                  case 68:
                    jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(arr);
                    localStorage.setItem('labsdata', jsonString);
                    localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(this.newBucketArray));
                    localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(this.addToBucket));
                    this.util.hide();
                    this.router.navigate(['search-labs']);

                  case 74:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this, [[27, 31, 35, 43], [36,, 38, 42], [52, 56, 60, 68], [61,, 63, 67]]);
          }));
        }
      }, {
        key: "searchLabs",
        value: function searchLabs() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var _this29 = this;

            var lat, lng, geocoder, address;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    if (!(this.addToBucket.length === 0)) {
                      _context24.next = 5;
                      break;
                    }

                    this.util.showToast('Select your test', 'danger', 'bottom');
                    return _context24.abrupt("return", false);

                  case 5:
                    if (!(this.pincode === '')) {
                      _context24.next = 8;
                      break;
                    }

                    this.util.showToast('Pincode is required', 'danger', 'bottom');
                    return _context24.abrupt("return", false);

                  case 8:
                    this.util.show('Please wait....');
                    this.secondary_labs = [];

                    if (!(this.pincode == localStorage.getItem('current_pincode'))) {
                      _context24.next = 15;
                      break;
                    }

                    lat = localStorage.getItem('lat');
                    lng = localStorage.getItem('lng');
                    _context24.next = 19;
                    break;

                  case 15:
                    geocoder = new google.maps.Geocoder();
                    address = this.pincode;
                    _context24.next = 19;
                    return geocoder.geocode({
                      'address': address
                    }, function (results, status) {
                      if (status == google.maps.GeocoderStatus.OK) {
                        var latitude = results[0].geometry.location.lat();
                        var longitude = results[0].geometry.location.lng();
                        lat = latitude;
                        lng = longitude; // alert("Latitude: " + latitude + "\nLongitude: " + longitude);
                      } else {
                        alert("Request failed.");
                      }
                    });

                  case 19:
                    _context24.next = 21;
                    return this.getAssociatedTest();

                  case 21:
                    _context24.next = 23;
                    return this.api.getSecondaryLabs().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this29, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee23() {
                        var _this30 = this;

                        var pincode, _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, _x11, delivery_pincode, _iteratorNormalCompletion27, _didIteratorError27, _iteratorError27, _iterator27, _step27, y, newSortedArray, _iteratorNormalCompletion25, _didIteratorError25, _iteratorError25, _iterator25, _step25, x, circularReplacer, arr, _iteratorNormalCompletion26, _didIteratorError26, _iteratorError26, _iterator26, _step26, _x12, jsonString;

                        return regeneratorRuntime.wrap(function _callee23$(_context23) {
                          while (1) {
                            switch (_context23.prev = _context23.next) {
                              case 0:
                                this.all_labs = data;
                                pincode = [];
                                this.util.hide();
                                _iteratorNormalCompletion15 = true;
                                _didIteratorError15 = false;
                                _iteratorError15 = undefined;
                                _context23.prev = 6;
                                _iterator15 = this.all_labs[Symbol.iterator]();

                              case 8:
                                if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
                                  _context23.next = 33;
                                  break;
                                }

                                _x11 = _step15.value;
                                delivery_pincode = [];
                                _iteratorNormalCompletion27 = true;
                                _didIteratorError27 = false;
                                _iteratorError27 = undefined;
                                _context23.prev = 14;

                                for (_iterator27 = _x11.delivery_pincode[Symbol.iterator](); !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                                  y = _step27.value;
                                  console.log(y.item_text, '== ', this.pincode);

                                  if (y.item_text == this.pincode) {
                                    this.secondary_labs.push(_x11);
                                  }
                                }

                                _context23.next = 22;
                                break;

                              case 18:
                                _context23.prev = 18;
                                _context23.t0 = _context23["catch"](14);
                                _didIteratorError27 = true;
                                _iteratorError27 = _context23.t0;

                              case 22:
                                _context23.prev = 22;
                                _context23.prev = 23;

                                if (!_iteratorNormalCompletion27 && _iterator27.return != null) {
                                  _iterator27.return();
                                }

                              case 25:
                                _context23.prev = 25;

                                if (!_didIteratorError27) {
                                  _context23.next = 28;
                                  break;
                                }

                                throw _iteratorError27;

                              case 28:
                                return _context23.finish(25);

                              case 29:
                                return _context23.finish(22);

                              case 30:
                                _iteratorNormalCompletion15 = true;
                                _context23.next = 8;
                                break;

                              case 33:
                                _context23.next = 39;
                                break;

                              case 35:
                                _context23.prev = 35;
                                _context23.t1 = _context23["catch"](6);
                                _didIteratorError15 = true;
                                _iteratorError15 = _context23.t1;

                              case 39:
                                _context23.prev = 39;
                                _context23.prev = 40;

                                if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                                  _iterator15.return();
                                }

                              case 42:
                                _context23.prev = 42;

                                if (!_didIteratorError15) {
                                  _context23.next = 45;
                                  break;
                                }

                                throw _iteratorError15;

                              case 45:
                                return _context23.finish(42);

                              case 46:
                                return _context23.finish(39);

                              case 47:
                                console.log(this.secondary_labs);
                                _context23.next = 50;
                                return this.secondary_labs.forEach(function (element) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this30, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee22() {
                                    var price, selling_price, all_test_data, all_test1_data, available_test, not_available_test, _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, _x6, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _x7, is_available, _iteratorNormalCompletion22, _didIteratorError22, _iteratorError22, _iterator22, _step22, y, test2data, _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, _x8, _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, average_rating, distance, rating_array, facilities, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, _x9, _iteratorNormalCompletion24, _didIteratorError24, _iteratorError24, _iterator24, _step24, _y2, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, _x10, avgrate, rating_length, _iteratorNormalCompletion21, _didIteratorError21, _iteratorError21, _iterator21, _step21, x;

                                    return regeneratorRuntime.wrap(function _callee22$(_context22) {
                                      while (1) {
                                        switch (_context22.prev = _context22.next) {
                                          case 0:
                                            price = 0;
                                            selling_price = 0;
                                            all_test_data = [];
                                            all_test1_data = [];
                                            available_test = [];
                                            not_available_test = [];
                                            console.log(this.associated_test);
                                            _iteratorNormalCompletion16 = true;
                                            _didIteratorError16 = false;
                                            _iteratorError16 = undefined;
                                            _context22.prev = 10;

                                            for (_iterator16 = this.associated_test[Symbol.iterator](); !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                              _x6 = _step16.value;

                                              if (_x6.branch_id == element.uid) {
                                                console.log('available data');
                                                all_test_data.push(_x6);
                                                available_test.push(_x6.itid.test_name);
                                                price += _x6.price;
                                                selling_price += _x6.selling_price;
                                              }
                                            }

                                            _context22.next = 18;
                                            break;

                                          case 14:
                                            _context22.prev = 14;
                                            _context22.t0 = _context22["catch"](10);
                                            _didIteratorError16 = true;
                                            _iteratorError16 = _context22.t0;

                                          case 18:
                                            _context22.prev = 18;
                                            _context22.prev = 19;

                                            if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                                              _iterator16.return();
                                            }

                                          case 21:
                                            _context22.prev = 21;

                                            if (!_didIteratorError16) {
                                              _context22.next = 24;
                                              break;
                                            }

                                            throw _iteratorError16;

                                          case 24:
                                            return _context22.finish(21);

                                          case 25:
                                            return _context22.finish(18);

                                          case 26:
                                            _iteratorNormalCompletion17 = true;
                                            _didIteratorError17 = false;
                                            _iteratorError17 = undefined;
                                            _context22.prev = 29;
                                            _iterator17 = this.addToBucket[Symbol.iterator]();

                                          case 31:
                                            if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
                                              _context22.next = 57;
                                              break;
                                            }

                                            _x7 = _step17.value;
                                            is_available = false;
                                            _iteratorNormalCompletion22 = true;
                                            _didIteratorError22 = false;
                                            _iteratorError22 = undefined;
                                            _context22.prev = 37;

                                            for (_iterator22 = all_test_data[Symbol.iterator](); !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                                              y = _step22.value;

                                              if (_x7 == y.individual_test) {
                                                is_available = true;
                                              }
                                            }

                                            _context22.next = 45;
                                            break;

                                          case 41:
                                            _context22.prev = 41;
                                            _context22.t1 = _context22["catch"](37);
                                            _didIteratorError22 = true;
                                            _iteratorError22 = _context22.t1;

                                          case 45:
                                            _context22.prev = 45;
                                            _context22.prev = 46;

                                            if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                                              _iterator22.return();
                                            }

                                          case 48:
                                            _context22.prev = 48;

                                            if (!_didIteratorError22) {
                                              _context22.next = 51;
                                              break;
                                            }

                                            throw _iteratorError22;

                                          case 51:
                                            return _context22.finish(48);

                                          case 52:
                                            return _context22.finish(45);

                                          case 53:
                                            if (is_available == false) {
                                              all_test1_data.push(_x7);
                                            }

                                          case 54:
                                            _iteratorNormalCompletion17 = true;
                                            _context22.next = 31;
                                            break;

                                          case 57:
                                            _context22.next = 63;
                                            break;

                                          case 59:
                                            _context22.prev = 59;
                                            _context22.t2 = _context22["catch"](29);
                                            _didIteratorError17 = true;
                                            _iteratorError17 = _context22.t2;

                                          case 63:
                                            _context22.prev = 63;
                                            _context22.prev = 64;

                                            if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                                              _iterator17.return();
                                            }

                                          case 66:
                                            _context22.prev = 66;

                                            if (!_didIteratorError17) {
                                              _context22.next = 69;
                                              break;
                                            }

                                            throw _iteratorError17;

                                          case 69:
                                            return _context22.finish(66);

                                          case 70:
                                            return _context22.finish(63);

                                          case 71:
                                            test2data = [];
                                            _iteratorNormalCompletion18 = true;
                                            _didIteratorError18 = false;
                                            _iteratorError18 = undefined;
                                            _context22.prev = 75;
                                            _iterator18 = this.associated_tests[Symbol.iterator]();

                                          case 77:
                                            if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
                                              _context22.next = 101;
                                              break;
                                            }

                                            _x8 = _step18.value;
                                            _iteratorNormalCompletion23 = true;
                                            _didIteratorError23 = false;
                                            _iteratorError23 = undefined;
                                            _context22.prev = 82;

                                            for (_iterator23 = all_test1_data[Symbol.iterator](); !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                                              y = _step23.value;

                                              if (_x8.individual_test == y) {
                                                test2data.push(_x8);
                                                not_available_test.push(_x8.itid.test_name);
                                              }
                                            }

                                            _context22.next = 90;
                                            break;

                                          case 86:
                                            _context22.prev = 86;
                                            _context22.t3 = _context22["catch"](82);
                                            _didIteratorError23 = true;
                                            _iteratorError23 = _context22.t3;

                                          case 90:
                                            _context22.prev = 90;
                                            _context22.prev = 91;

                                            if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                                              _iterator23.return();
                                            }

                                          case 93:
                                            _context22.prev = 93;

                                            if (!_didIteratorError23) {
                                              _context22.next = 96;
                                              break;
                                            }

                                            throw _iteratorError23;

                                          case 96:
                                            return _context22.finish(93);

                                          case 97:
                                            return _context22.finish(90);

                                          case 98:
                                            _iteratorNormalCompletion18 = true;
                                            _context22.next = 77;
                                            break;

                                          case 101:
                                            _context22.next = 107;
                                            break;

                                          case 103:
                                            _context22.prev = 103;
                                            _context22.t4 = _context22["catch"](75);
                                            _didIteratorError18 = true;
                                            _iteratorError18 = _context22.t4;

                                          case 107:
                                            _context22.prev = 107;
                                            _context22.prev = 108;

                                            if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                                              _iterator18.return();
                                            }

                                          case 110:
                                            _context22.prev = 110;

                                            if (!_didIteratorError18) {
                                              _context22.next = 113;
                                              break;
                                            }

                                            throw _iteratorError18;

                                          case 113:
                                            return _context22.finish(110);

                                          case 114:
                                            return _context22.finish(107);

                                          case 115:
                                            all_test1_data = test2data;
                                            average_rating = 0;
                                            element.test_data = all_test_data;
                                            element.test1_data = all_test1_data;
                                            element.available_test = available_test;
                                            element.not_available_test = not_available_test;
                                            element.price = price;
                                            element.selling_price = selling_price;
                                            _context22.next = 125;
                                            return this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);

                                          case 125:
                                            distance = _context22.sent;
                                            element.distance = distance;
                                            rating_array = [];
                                            facilities = [];
                                            _iteratorNormalCompletion19 = true;
                                            _didIteratorError19 = false;
                                            _iteratorError19 = undefined;
                                            _context22.prev = 132;
                                            _iterator19 = this.facilities[Symbol.iterator]();

                                          case 134:
                                            if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
                                              _context22.next = 158;
                                              break;
                                            }

                                            _x9 = _step19.value;
                                            _iteratorNormalCompletion24 = true;
                                            _didIteratorError24 = false;
                                            _iteratorError24 = undefined;
                                            _context22.prev = 139;

                                            for (_iterator24 = element.facility[Symbol.iterator](); !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                                              _y2 = _step24.value;

                                              if (_x9.id == _y2) {
                                                facilities.push(_x9);
                                              }
                                            }

                                            _context22.next = 147;
                                            break;

                                          case 143:
                                            _context22.prev = 143;
                                            _context22.t5 = _context22["catch"](139);
                                            _didIteratorError24 = true;
                                            _iteratorError24 = _context22.t5;

                                          case 147:
                                            _context22.prev = 147;
                                            _context22.prev = 148;

                                            if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
                                              _iterator24.return();
                                            }

                                          case 150:
                                            _context22.prev = 150;

                                            if (!_didIteratorError24) {
                                              _context22.next = 153;
                                              break;
                                            }

                                            throw _iteratorError24;

                                          case 153:
                                            return _context22.finish(150);

                                          case 154:
                                            return _context22.finish(147);

                                          case 155:
                                            _iteratorNormalCompletion19 = true;
                                            _context22.next = 134;
                                            break;

                                          case 158:
                                            _context22.next = 164;
                                            break;

                                          case 160:
                                            _context22.prev = 160;
                                            _context22.t6 = _context22["catch"](132);
                                            _didIteratorError19 = true;
                                            _iteratorError19 = _context22.t6;

                                          case 164:
                                            _context22.prev = 164;
                                            _context22.prev = 165;

                                            if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                                              _iterator19.return();
                                            }

                                          case 167:
                                            _context22.prev = 167;

                                            if (!_didIteratorError19) {
                                              _context22.next = 170;
                                              break;
                                            }

                                            throw _iteratorError19;

                                          case 170:
                                            return _context22.finish(167);

                                          case 171:
                                            return _context22.finish(164);

                                          case 172:
                                            element.facilities = facilities;
                                            _iteratorNormalCompletion20 = true;
                                            _didIteratorError20 = false;
                                            _iteratorError20 = undefined;
                                            _context22.prev = 176;

                                            for (_iterator20 = this.reviews[Symbol.iterator](); !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                              _x10 = _step20.value;

                                              if (_x10.lab_id == element.id) {
                                                rating_array.push(_x10);
                                              }
                                            }

                                            _context22.next = 184;
                                            break;

                                          case 180:
                                            _context22.prev = 180;
                                            _context22.t7 = _context22["catch"](176);
                                            _didIteratorError20 = true;
                                            _iteratorError20 = _context22.t7;

                                          case 184:
                                            _context22.prev = 184;
                                            _context22.prev = 185;

                                            if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                                              _iterator20.return();
                                            }

                                          case 187:
                                            _context22.prev = 187;

                                            if (!_didIteratorError20) {
                                              _context22.next = 190;
                                              break;
                                            }

                                            throw _iteratorError20;

                                          case 190:
                                            return _context22.finish(187);

                                          case 191:
                                            return _context22.finish(184);

                                          case 192:
                                            element.total_reviews = 0;

                                            if (!(rating_array.length > 0)) {
                                              _context22.next = 217;
                                              break;
                                            }

                                            avgrate = 0;
                                            rating_length = rating_array.length;
                                            _iteratorNormalCompletion21 = true;
                                            _didIteratorError21 = false;
                                            _iteratorError21 = undefined;
                                            _context22.prev = 199;

                                            for (_iterator21 = rating_array[Symbol.iterator](); !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                                              x = _step21.value;
                                              avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                                            }

                                            _context22.next = 207;
                                            break;

                                          case 203:
                                            _context22.prev = 203;
                                            _context22.t8 = _context22["catch"](199);
                                            _didIteratorError21 = true;
                                            _iteratorError21 = _context22.t8;

                                          case 207:
                                            _context22.prev = 207;
                                            _context22.prev = 208;

                                            if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                                              _iterator21.return();
                                            }

                                          case 210:
                                            _context22.prev = 210;

                                            if (!_didIteratorError21) {
                                              _context22.next = 213;
                                              break;
                                            }

                                            throw _iteratorError21;

                                          case 213:
                                            return _context22.finish(210);

                                          case 214:
                                            return _context22.finish(207);

                                          case 215:
                                            average_rating = avgrate / rating_length;
                                            element.total_reviews = rating_array.length;

                                          case 217:
                                            element.average_rating = average_rating;

                                          case 218:
                                          case "end":
                                            return _context22.stop();
                                        }
                                      }
                                    }, _callee22, this, [[10, 14, 18, 26], [19,, 21, 25], [29, 59, 63, 71], [37, 41, 45, 53], [46,, 48, 52], [64,, 66, 70], [75, 103, 107, 115], [82, 86, 90, 98], [91,, 93, 97], [108,, 110, 114], [132, 160, 164, 172], [139, 143, 147, 155], [148,, 150, 154], [165,, 167, 171], [176, 180, 184, 192], [185,, 187, 191], [199, 203, 207, 215], [208,, 210, 214]]);
                                  }));
                                });

                              case 50:
                                this.secondary_labs.sort(this.compare);
                                newSortedArray = [];
                                _iteratorNormalCompletion25 = true;
                                _didIteratorError25 = false;
                                _iteratorError25 = undefined;
                                _context23.prev = 55;

                                for (_iterator25 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                                  x = _step25.value;

                                  if (x.test_data.length > 0) {
                                    newSortedArray.push(x);
                                  }
                                }

                                _context23.next = 63;
                                break;

                              case 59:
                                _context23.prev = 59;
                                _context23.t2 = _context23["catch"](55);
                                _didIteratorError25 = true;
                                _iteratorError25 = _context23.t2;

                              case 63:
                                _context23.prev = 63;
                                _context23.prev = 64;

                                if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
                                  _iterator25.return();
                                }

                              case 66:
                                _context23.prev = 66;

                                if (!_didIteratorError25) {
                                  _context23.next = 69;
                                  break;
                                }

                                throw _iteratorError25;

                              case 69:
                                return _context23.finish(66);

                              case 70:
                                return _context23.finish(63);

                              case 71:
                                this.secondary_labs = newSortedArray;
                                console.log(this.secondary_labs);
                                console.log(this.newBucketArray);
                                console.log(this.addToBucket);

                                circularReplacer = function circularReplacer() {
                                  // Creating new WeakSet to keep 
                                  // track of previously seen objects
                                  var seen = new WeakSet();
                                  return function (key, value) {
                                    // If type of value is an 
                                    // object or value is null
                                    if (typeof value === "object" && value !== null) {
                                      // If it has been seen before
                                      if (seen.has(value)) {
                                        return;
                                      } // Add current value to the set


                                      seen.add(value);
                                    } // return the value


                                    return value;
                                  };
                                };

                                arr = [];
                                _iteratorNormalCompletion26 = true;
                                _didIteratorError26 = false;
                                _iteratorError26 = undefined;
                                _context23.prev = 80;

                                for (_iterator26 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                                  _x12 = _step26.value;
                                  arr.push({
                                    address: _x12.address,
                                    available_test: _x12.available_test,
                                    cod: _x12.cod,
                                    cover: _x12.cover,
                                    distance: _x12.distance,
                                    price: _x12.price,
                                    selling_price: _x12.selling_price,
                                    total_reviews: _x12.total_reviews,
                                    facilities: _x12.facilities,
                                    id: _x12.id,
                                    lat: _x12.lat,
                                    lng: _x12.lng,
                                    name: _x12.name,
                                    lab_timings: _x12.lab_timings,
                                    not_available_test: _x12.not_available_test,
                                    logo: _x12.logo,
                                    range_price: _x12.range_price,
                                    service_delivery: _x12.service_delivery,
                                    test1_data: _x12.test1_data,
                                    test_data: _x12.test_data,
                                    free_charge: _x12.free_charge,
                                    page_slug: _x12.page_slug
                                  });
                                }

                                _context23.next = 88;
                                break;

                              case 84:
                                _context23.prev = 84;
                                _context23.t3 = _context23["catch"](80);
                                _didIteratorError26 = true;
                                _iteratorError26 = _context23.t3;

                              case 88:
                                _context23.prev = 88;
                                _context23.prev = 89;

                                if (!_iteratorNormalCompletion26 && _iterator26.return != null) {
                                  _iterator26.return();
                                }

                              case 91:
                                _context23.prev = 91;

                                if (!_didIteratorError26) {
                                  _context23.next = 94;
                                  break;
                                }

                                throw _iteratorError26;

                              case 94:
                                return _context23.finish(91);

                              case 95:
                                return _context23.finish(88);

                              case 96:
                                jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(arr);
                                localStorage.setItem('labsdata', jsonString);
                                localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(this.newBucketArray));
                                localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(this.addToBucket));
                                this.router.navigate(['search-labs']);

                              case 101:
                              case "end":
                                return _context23.stop();
                            }
                          }
                        }, _callee23, this, [[6, 35, 39, 47], [14, 18, 22, 30], [23,, 25, 29], [40,, 42, 46], [55, 59, 63, 71], [64,, 66, 70], [80, 84, 88, 96], [89,, 91, 95]]);
                      }));
                    }).catch(function (error) {
                      _this29.util.hide();

                      console.log(error);
                    });

                  case 23:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "compare",
        value: function compare(a, b) {
          if (a.distance < b.distance) {
            return -1;
          }

          if (a.distance > b.distance) {
            return 1;
          }

          return 0;
        }
      }, {
        key: "getAssociatedTest",
        value: function getAssociatedTest() {
          this.associated_test = [];
          var _iteratorNormalCompletion28 = true;
          var _didIteratorError28 = false;
          var _iteratorError28 = undefined;

          try {
            for (var _iterator28 = this.addToBucket[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
              var i = _step28.value;
              console.log(i);
              var _iteratorNormalCompletion29 = true;
              var _didIteratorError29 = false;
              var _iteratorError29 = undefined;

              try {
                for (var _iterator29 = this.associated_tests[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                  var x = _step29.value;
                  if (x.individual_test == i) this.associated_test.push(x);
                  console.log(this.associated_test);
                }
              } catch (err) {
                _didIteratorError29 = true;
                _iteratorError29 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion29 && _iterator29.return != null) {
                    _iterator29.return();
                  }
                } finally {
                  if (_didIteratorError29) {
                    throw _iteratorError29;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError28 = true;
            _iteratorError28 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion28 && _iterator28.return != null) {
                _iterator28.return();
              }
            } finally {
              if (_didIteratorError28) {
                throw _iteratorError28;
              }
            }
          }
        }
      }, {
        key: "openQuery",
        value: function openQuery() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var modal;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.modalController.create({
                      component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                      cssClass: 'supportCss'
                    });

                  case 2:
                    modal = _context25.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context25.next = 6;
                    return modal.present();

                  case 6:
                    return _context25.abrupt("return", _context25.sent);

                  case 7:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "showAllTests",
        value: function showAllTests() {
          this.router.navigate(['tests']);
        }
      }, {
        key: "showAllPackages",
        value: function showAllPackages() {
          this.router.navigate(['health-packages']);
        }
      }, {
        key: "goToDetail",
        value: function goToDetail(data) {
          localStorage.setItem('testid', data.id);
          localStorage.setItem('testname', data.test_name);
          this.router.navigate(['test', data.page_slug]);
        }
      }, {
        key: "viewRisk",
        value: function viewRisk(data) {
          localStorage.setItem('riskid', data.id);
          this.router.navigate(['risk', data.name]);
        }
      }, {
        key: "viewHabit",
        value: function viewHabit(data) {
          localStorage.setItem('habitid', data.id);
          this.router.navigate(['habit', data.name]);
        }
      }, {
        key: "goToCardiology",
        value: function goToCardiology() {
          this.router.navigate(['cardiology']);
        }
      }, {
        key: "goToRadiology",
        value: function goToRadiology() {
          this.router.navigate(['radiology']);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map