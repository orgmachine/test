(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homehea\"><app-header></app-header></div>\n<ion-content [scrollEvents]=\"true\">\n<!--   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher> -->\n  <!-- <ion-progress-bar type=\"indeterminate\" color=\"primary\" *ngIf=\"!isLoaded\"></ion-progress-bar> -->\n  <!-- <div *ngIf=\"isLoaded\"> -->\n  <div>\n  <div class=\"main_slider\">\n  \n <!--  <div class=\"main_content_div\">\n    <ion-slides>\n      <ion-slide *ngFor=\"let item of row_1_banner\">\n        <img [src]=\"item.banner\">\n      </ion-slide>\n    </ion-slides>\n  </div>-->\n  <div class=\"container\">\n  <div  class=\"socserch\">\n  <div class=\"certxt\"><span style=\"font-size: 24px;margin-bottom: 5px;display: block;\">Search Test : Compare Price : Book Appointments</span>\n  </div>\n  \n  <div class=\"tags\" *ngIf=\"newBucketArray.length !==0\">\n  \t<div *ngFor=\"let item of newBucketArray;let i = index;\">\n  \t\t<span>{{item}} <ion-icon name=\"close-outline\" (click)=\"remove(i)\"></ion-icon></span>\n  \t</div>\n  </div>\n    <div class=\"socserchin\">\n    <ion-searchbar class=\"searchinp\" placeholder=\"Find your Tests\" [(ngModel)]=\"terms\" animated=\"true\" \n    (ionInput)=\"onInput($event,'test')\" (ionClear)=\"onCancel($event,'test')\">\n    </ion-searchbar>\n\t\t<ion-searchbar class=\"pininp\" placeholder=\"Pincode\" [(ngModel)]=\"pincode\" (ionInput)=\"onInput($event,'pincode')\" (ionClear)=\"onCancel($event,'pincode')\">\n\t\t</ion-searchbar>\n\t    <ion-button class=\"searchbut\" (click)=\"searchLabs2()\">Search</ion-button>\n\t  </div>\n\t\t<div class=\"test-search-item\">\n\t\t  <ion-list *ngIf=\"testLoad\">\n\t    \t<ion-item *ngFor=\"let item of all_test | search: terms | slice:0:5\" class=\"keywords\" (click)=\"add(item)\">\n\t  \t    <ion-thumbnail slot=\"end\">\n\t\t        <ion-icon name=\"add-outline\"></ion-icon>\n\t\t      </ion-thumbnail>\n\t\t      <p>{{item.test_name}}</p>\n\t\t    </ion-item>\n\t\t  </ion-list>\n\t\t</div>\n\t\t<div class=\"pincode-search-item\">\n\t\t  <ion-list *ngIf=\"pincodeLoad\">\n\t    \t<ion-item *ngFor=\"let item of deliveries_pincode | filter: pincode | slice:0:3\" class=\"keywords\" (click)=\"select(item)\">\n\t\t      <p>{{item.pincode}}</p>\n\t\t    </ion-item>\n\t\t  </ion-list>\n\t\t</div>\n  </div>\n</div>\n  </div>\n\n\n\n<div class=\"frequentlytopProducts\">\n\t\n\t\t<div class=\"container\">\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\"> Popular Tests</div>\n<img src=\"assets/blue_line.jpg\">\n</div></div>\n</div></div>\n<div class=\"desktopview\">\n<div class=\"container\">\n\t<ion-slides  [options]=\"slideOpts5\">\n      <ion-slide *ngFor=\"let item of popular_tests | slice:0:16 let i = index\">\n\t\t<div class=\"grid-item-inner\">\n\t\t\t\t<div [ngClass]=\"(i % 2 == 0) ? 'mid' : 'mid second'\">\n\t\t\t\t\t\t<div class=\"discount\">\n\t\t\t\t\t\t\t<h5> Discounted Upto {{((item.mrp - item.price)/item.mrp) * 100 | number : '1.0-0'}} %</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"prosec\">\n\t\t\t \t\t\t<p class=\"category_name\">{{item.test_name}}</p>\n\t\t\t \t\t\t<div class=\"desmp uptopmp\">\n\t\t\t\t \t\t\t<ul>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Includes: {{item.parameter.length}} Parameters</li>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length === 0\">Includes: 1 Parameters</li>\n\t\t\t\t\t\t  \t<li>Provided by: {{item.labs}} Labs</li>\n\t\t\t\t\t\t  \t<li>Available in: {{item.total_cities}} Cities</li>\n\t\t\t\t\t\t  </ul> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t  <div class=\"addtomore\">\n\t\t\t\t\t  \t<button ion-button class=\"addtocart\" (click)=\"goToDetail(item)\">Know more</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  \t<div class=\"radgridtest\">\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tMRP:\n\t\t\t\t\t\t\t\t<br><span><i>₹</i> {{item.mrp}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tOffered Price: \n\t\t\t\t\t\t\t\t<br><i>₹</i> {{item.price}} Onwards\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t  \t<ion-button class=\"booknow\" (click)=\"book(item)\">Book Now</ion-button>\n\t\t\t\t\t  </div></div>\n\t\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t</ion-slide>\n    </ion-slides>\n\t</div></div>\n\t\n<div class=\"mobileview\">\n\t\n\t<ion-slides  [options]=\"slideOptsmob5\">\n      <ion-slide *ngFor=\"let item of popular_tests | slice:0:16 let i = index\">\n\t\t<div class=\"grid-item-inner\">\n\t\t\t\t<div [ngClass]=\"(i % 2 == 0) ? 'mid' : 'mid second'\">\n\t\t\t\t\t\t<div class=\"discount\">\n\t\t\t\t\t\t\t<h5> Discounted Upto {{((item.mrp - item.price)/item.mrp) * 100 | number : '1.0-0'}}%</h5>\n\t\t\t\t\t\t</div>\n\t\t\t \t\t\t<p class=\"category_name\" style=\"width: 304px;\">{{item.test_name}}</p>\n\t\t\t \t\t\t<div class=\"desmp uptopmp\">\n\t\t\t\t \t\t\t<ul>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Includes: {{item.parameter.length}} Parameters</li>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length === 0\">Includes: 1 Parameters</li>\n\t\t\t\t\t\t  \t<li>Provided by: {{item.labs}} Labs</li>\n\t\t\t\t\t\t  \t<li>Available in: {{item.total_cities}} Cities</li>\n\t\t\t\t\t\t  </ul> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t  <div class=\"addtomore\">\n\t\t\t\t\t  \t<button ion-button class=\"addtocart\" (click)=\"goToDetail(item)\">Know more</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  \t<div class=\"radgridtest\">\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tMRP:\n\t\t\t\t\t\t\t\t<br><span><i>₹</i> {{item.mrp}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tOffered Price: \n\t\t\t\t\t\t\t\t<br><i>₹</i> {{item.price}} Onwards\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t  \t<ion-button class=\"booknow\" (click)=\"book(item)\">Book Now</ion-button>\n\t\t\t\t\t  </div>\n\t\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t</ion-slide>\n    </ion-slides>\n\t\n</div>\n<div class=\"viewall\" (click)=\"showAllTests()\"> View All</div>\n\n</div>\n\n\n<div class=\"topRatedProducts\">\n\t\n\t\t<div class=\"container\">\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Most Popular Packages</div><img src=\"assets/blue_line.jpg\">\n</div></div>\n</div></div>\n\n<div class=\"desktopview\">\n<div class=\"container\">\n\t<ion-slides  [options]=\"slideOpts4\">\n      <ion-slide *ngFor=\"let item of popular_packages | slice:0:12\">\n\t  <img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n\t  \n\t\t<div class=\"grid-item-inner\">\n\t\t\n\t\t\t\t<div class=\"uptopmp\">\n\t\t \t\t<p class=\"category_namemp\">{{item.test_name}}</p> \n\t\t\t\t  <div class=\"desmp\">\n\t\t\t\t  <!-- <ul>\n\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Total no.of Tests - {{item.parameter.length}}</li>\n\t\t\t\t  \t<li>Quick Turn Around Time</li>\n\t\t\t\t  \t<li>Reporting as per NABL ISO guidelines</li>\n\t\t\t\t  </ul> -->\n\t\t\t\t  <ul>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Includes: {{item.parameter.length}} Parameters</li>\n\t\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length === 0\">Includes: 1 Parameters</li>\n\t\t\t\t\t\t  \t<li>Provided by: {{item.labs}} Labs</li>\n\t\t\t\t\t\t  \t<li>Available in: {{item.total_cities}} Cities</li>\n\t\t\t\t\t\t  </ul> \n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"radgridtest\">\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tMRP:\n\t\t\t\t\t\t\t\t<br><span><i>₹</i> {{item.mrp}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tOffered Price: \n\t\t\t\t\t\t\t\t<br><i>₹</i> {{item.price}} Onwards\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"butkmore\">\n\t\t\t\t\t\t<div class=\"discountd\">\n\t\t\t\t\t\t\t<h5> Discounted Upto {{((item.mrp - item.price)/item.mrp) * 100 | number : '1.0-0'}}%</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n\t\t\t\t\t<button ion-button  class=\"know_more\" (click)=\"book(item)\">Book Now</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t</ion-slide>\n    </ion-slides>\n\t</div>\n</div>\n<div class=\"mobileview\">\n\t<ion-slides  [options]=\"slideOptsmob4\">\n      <ion-slide *ngFor=\"let item of popular_packages | slice:0:12\">\n\t\t<div class=\"grid-item-inner\">\n\t\t\t\t<div class=\"uptopmp\">\n\t\t \t\t\t<img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n\t\t \t\t\t<p class=\"category_namemp\">{{item.test_name}}</p> \n\t\t\t\t  <div class=\"desmp\">\n\t\t\t\t <!--  <ul>\n\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Total no.of Tests - {{item.parameter.length}}</li>\n\t\t\t\t  \t<li>Quick Turn Around Time</li>\n\t\t\t\t  \t<li>Reporting as per NABL ISO guidelines</li>\n\t\t\t\t  </ul> -->\n\t\t\t\t    <ul>\n\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length !== 0\">Includes: {{item.parameter.length}} Parameters</li>\n\t\t\t\t\t  \t<li *ngIf=\"item.parameter.length === 0\">Includes: 1 Parameters</li>\n\t\t\t\t\t  \t<li>Provided by: {{item.labs}} Labs</li>\n\t\t\t\t\t  \t<li>Available in: {{item.total_cities}} Cities</li>\n\t\t\t\t\t  </ul> \n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radgridtest\">\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tMRP:\n\t\t\t\t\t\t\t\t<br><span><i>₹</i> {{item.mrp}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pricelbl\">\n\t\t\t\t\t\t\t\tOffered Price: \n\t\t\t\t\t\t\t\t<br><i>₹</i> {{item.price}} Onwards\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"butkmore\">\n\t\t\t\t\t\t<div class=\"discountd\">\n\t\t\t\t\t\t\t<h5> Discounted Upto {{((item.mrp - item.price)/item.mrp) * 100 | number : '1.0-0'}}%</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n\t\t\t\t\t<button ion-button  class=\"know_more\" (click)=\"book(item)\">Book Now</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t</ion-slide>\n    </ion-slides>\n\t</div>\n\n<div class=\"viewall\" (click)=\"showAllPackages()\">View All Package</div>\n</div>\n\n\n  \n  \n<div class=\"ShopByProducts\">\n\t\n\t\t<div class=\"container\" >\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Health Risks</div>\n<img src=\"assets/org_line.png\">\n</div></div>\n</div>\n\n\n\n<div class=\"desktopview\">\n<ion-slides  [options]=\"slideOpts2\">\n      <ion-slide *ngFor=\"let item of risks | slice:0:12\" (click)=\"add(item)\">\n       <div class=\"grid-item-innerha\">\n\t    <img class=\"popimg\" [src]=\"item.image\">\n\t    <p class=\"category_nameha\">{{item.name}}</p> \n\t\t\t<div class=\"desha\" [innerHtml]=\"item.description | slice:0:160\">...</div>\n\t\t\t<button ion-button  class=\"addtocart\" (click)=\"viewRisk(item)\">View Test</button>\n\t  </div>\n      </ion-slide>\n    </ion-slides>\n</div>\n<div class=\"mobileview\">\n<ion-slides  [options]=\"slideOptsmob2\">\n      <ion-slide *ngFor=\"let item of risks | slice:0:12\" (click)=\"add(item)\">\n       <div class=\"grid-item-innerha\">\n\t    <img class=\"popimg\" [src]=\"item.image\">\n\t    <p class=\"category_nameha\">{{item.name}}</p> \n\t\t\t<div class=\"desha\" [innerHtml]=\"item.description | slice:0:160\">...</div>\n\t\t\t<button ion-button  class=\"addtocart\" (click)=\"viewRisk(item)\">View Test</button>\n\t  </div>\n      </ion-slide>\n    </ion-slides>\n</div>\n</div>\n</div>\n\n\n\n<div class=\"raditestcon\">\n<div class=\"container\">\n<div class=\"row\">\n\n<div class=\"col-md-12 col-lg-6 col-xl-6\">\n<img src=\"assets/radtest.png\"/>\n\n</div>\n\n<div class=\"col-md-12 col-lg-6 col-xl-6\">\n\t<h2>Radiology Test</h2>\n\t<p class=\"text-justify\" style=\" line-height: 30px;\">Radiology, also called diagnostic imaging, is a series of different tests that take pictures or images of various parts of the body.  Many of these tests are unique in that they allow doctors to see inside the body.  A number of different imaging exams can be used to provide this view, including X-ray, MRI, ultrasound, CT scan and PET scan.<br><i>“Radiology is essential to the diagnosis of many diseases, particularly cancer.  Early diagnosis saves live.  Without diagnosis there can be no treatment, there can be no cure.” </i></p>\n\t<div class=\"radgridtest\">\n\t\t<div class=\"radgridtestbox\" (click)=\"goToRadiology()\">\n\t\t\t<img src=\"assets/rt1.png\">\n\t\t\t<br>X-Ray / Mammography\n\t\t</div>\n\t\t<div class=\"radgridtestbox\" (click)=\"goToRadiology()\">\n\t\t\t<img src=\"assets/rt2.png\">\n\t\t\t<br>Ultrasound\n\t\t</div>\n\t\t<div class=\"radgridtestbox\" (click)=\"goToRadiology()\">\n\t\t\t<img src=\"assets/rt3.png\">\n\t\t\t<br>CT Scan / MRI\n\t\t</div>\n\t</div>\n</div>\n</div>\n</div></div>\n\n\n<div class=\"raditestcon cardio\">\n<div class=\"container\">\n<div class=\"row\">\n\n\n<div class=\"col-md-12 col-lg-6 col-xl-6\">\n<h2>Cardiology Test</h2>\n<p class=\"text-justify\" style=\" line-height: 30px;\">Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Heart disease relates specifically to the heart, while cardiovascular disease affects the heart, the blood vessels, or both. <br><i> There are different heart health tests, but it’s important to remember that these tests have little to no risk involved and are highly beneficial for allowing your doctor to understand how your heart is working.</i></p>\n<div class=\"radgridtest\">\n\t<div class=\"radgridtestbox\" (click)=\"goToCardiology()\">\n\t\t<img src=\"assets/ct1.png\">\n\t\t<br>ECG / Holter\n\t</div>\n\t<div class=\"radgridtestbox\" (click)=\"goToCardiology()\">\n\t\t<img src=\"assets/ct2.png\">\n\t\t<br>ECHO / TMT\n\t</div>\n\t<div class=\"radgridtestbox\" (click)=\"goToCardiology()\">\n\t\t<img src=\"assets/ct3.png\">\n\t\t<br>Colour Doppler\n\t</div>\n<!-- <div class=\"radgridtestbox\"><img src=\"assets/r1_02.png\"><br>Heart & Diabetic \nRisk test</div>\n<div class=\"radgridtestbox\"><img src=\"assets/r1_03.png\"><br>Heart & Diabetic \nRisk test</div> -->\n</div>\n</div>\n\n<div class=\"col-md-12 col-lg-6 col-xl-6\">\n<img src=\"assets/cardio.png\"/>\n\n</div>\n\n</div>\n</div></div>\n\n<div class=\"ShopByProducts heathhab\">\n<div class=\"container\" >\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Health Habits</div>\n<img src=\"assets/org_line.png\">\n</div></div>\n</div>\n<div class=\"desktopview\">\n\t<ion-slides  [options]=\"slideOpts3\">\n      <ion-slide *ngFor=\"let item of habbits | slice:0:8\" (click)=\"add(item)\">\n\t\t\t<div class=\"grid-item-innerha\">\n\t\t\t  <img class=\"popimg\" [src]=\"item.image\">\n\t\t\t  <p class=\"category_nameha\">{{item.name}}</p> \n\t\t\t\t<div class=\"desha\" [innerHtml]=\"item.description | slice:0:160\">...</div>\n\t\t\t\t<button ion-button  class=\"addtocart\" (click)=\"viewHabit(item)\" >View Test</button>\n\t\t\t</div>\n\t\t</ion-slide>\n    </ion-slides>\n\t</div>\n\t<div class=\"mobileview\">\n\t<ion-slides  [options]=\"slideOptsmob3\">\n      <ion-slide *ngFor=\"let item of habbits | slice:0:8\" (click)=\"add(item)\">\n\t\t\t<div class=\"grid-item-innerha\">\n\t\t\t  <img class=\"popimg\" [src]=\"item.image\">\n\t\t\t  <p class=\"category_nameha\">{{item.name}}</p> \n\t\t\t\t<div class=\"desha\" [innerHtml]=\"item.description | slice:0:160\">...</div>\n\t\t\t\t<button ion-button  class=\"addtocart\" (click)=\"viewHabit(item)\" >View Test</button>\n\t\t\t</div>\n\t\t</ion-slide>\n    </ion-slides>\n\t</div>\n\t</div>\n</div>\n\n\t<div class=\"row\">\n\t\t<img [src]=\"row_2_banner\">\n\t</div>\n\n<div class=\"numcount container-fluid\">\n<div class=\"row\">\n<div class=\"col-xl-3 col-md-3 col-sm-12\">\n<div class=\"ct-counter ct-counter-layout1 style1 \">\n<div class=\"ct-counter-inner\">\n<div class=\"ct-counter-icon\">\n<img src=\"assets/hp.png\"></div>\n<div class=\"ct-counter-meta\">\n<div class=\"ct-counter-number\">\n<span class=\"ct-counter-number-value\">{{100000+bookings.length}}</span>\n <span class=\"ct-counter-number-suffix\">+</span></div>\n <div class=\"ct-counter-title\">Happy Patients</div></div></div></div>\n</div>\n<div class=\"col-xl-3 col-md-3 col-sm-12\">\n<div class=\"ct-counter ct-counter-layout1 style1 \">\n<div class=\"ct-counter-inner\">\n<div class=\"ct-counter-icon\">\n<img src=\"assets/lt.png\"></div>\n<div class=\"ct-counter-meta\">\n<div class=\"ct-counter-number\">\n<span class=\"ct-counter-number-value\">{{all_tests.length}}</span>\n <span class=\"ct-counter-number-suffix\">+</span></div>\n <div class=\"ct-counter-title\">Tests Available</div></div></div></div>\n</div>\n<div class=\"col-xl-3 col-md-3 col-sm-12\">\n<div class=\"ct-counter ct-counter-layout1 style1 \">\n<div class=\"ct-counter-inner\">\n<div class=\"ct-counter-icon\">\n<img src=\"assets/pl.png\"></div>\n<div class=\"ct-counter-meta\">\n<div class=\"ct-counter-number\">\n<span class=\"ct-counter-number-value\">{{total_lab.length}}</span>\n <span class=\"ct-counter-number-suffix\">+</span></div>\n <div class=\"ct-counter-title\">Partner Lab</div></div></div></div>\n</div>\n<div class=\"col-xl-3 col-md-3 col-sm-12\">\n<div class=\"ct-counter ct-counter-layout1 style1 \">\n<div class=\"ct-counter-inner\">\n<div class=\"ct-counter-icon\">\n<img src=\"assets/ps.png\"></div>\n<div class=\"ct-counter-meta\">\n<div class=\"ct-counter-number\">\n<span class=\"ct-counter-number-value\">{{all_pincodes.length}}</span>\n <span class=\"ct-counter-number-suffix\">+</span></div>\n <div class=\"ct-counter-title\">PIN codes Serving</div></div></div></div>\n</div>\n\n</div></div>\n\n<div class=\"clinsec\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div style=\"margin:30px auto\">\n\t\t\t\t<div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Our Network Partners</div><img src=\"assets/blue_line.jpg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12 col-lg-12 col-xl-12 p-0\">\n\t\t\t\t<div class=\"grid-item-innerc\">\t\t\t\t  \n\t\t\t\t  <ion-slides [options]=\"slideOpts\">\n      \t\t\t<ion-slide *ngFor=\"let item of primary_lab\">\n        \t\t\t<img [src]=\"item.logo\">\n\t\t\t      </ion-slide>\n\t\t\t    </ion-slides>\n\t\t\t\t</div>\n\t    </div>\n\t  </div>\n\t</div>\n</div>\n<br>\n<div class=\"majorcity\">\n\t<div class=\"container\">\n<div class=\"row\">\n<div style=\"margin:10px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\">\n\t<div class=\"item--sub-title style-default\" style=\"color: #fff;\">Major Cities</div><img src=\"assets/white_line.jpg\">\n</div></div>\n</div></div>\n\t\n\t<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12 col-lg-12 col-xl-12 p-0\">  \n<div class=\"mcity\">\n<div class=\"mcityt\" *ngFor=\"let item of cities | sort:'city'\">\n{{item.city}}&nbsp;|&nbsp;\n</div> \n</div>\n\t\n\t</div></div></div>\n\t\n</div>\n\n\n\n</div><!-- isLoaded div END  -->\n\n\n<app-footer></app-footer>\n<!-- \t<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"openQuery()\">\n    <img src=\"assets/call_but.png\" width=\"\">\n  </ion-fab>\n\t<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n\t\t<a href=\"https://api.whatsapp.com/send?phone=+919311213388\"  target=\"_blank\"><img src=\"assets/watsapp.png\" width=\"\"></a>\n  </ion-fab> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic5-star-rating */ "./node_modules/ionic5-star-rating/fesm2015/ionic5-star-rating.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__);












let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ionic5_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRatingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div .back_image {\n  height: 144px;\n  width: 100%;\n  border-radius: 15px;\n  background-position: center;\n  background-size: cover;\n  margin: 10px 0px 0px 10px;\n}\n\n.search-tag {\n  background: var(--ion-color-primary);\n  padding: 16px;\n}\n\n.search-tag p {\n  color: white;\n  margin-bottom: 0px;\n}\n\n.search-tag ion-icon {\n  position: relative;\n  top: 3px;\n}\n\n.tags {\n  padding-left: 14px;\n  margin: 8px 0 1px;\n  display: inline-block;\n}\n\n.tags span {\n  font-size: 12px;\n  background: #fff;\n  margin: 0px 2px;\n  padding: 4px 6px;\n  border-radius: 20px;\n  color: #000;\n  border: 1px solid #ea5b24;\n}\n\n.tags span ion-icon {\n  position: relative;\n  top: 2px;\n  color: #fff;\n  background: #ea5b24;\n  border-radius: 50px;\n  padding: 2px;\n  font-size: 10px;\n  top: 2px;\n}\n\n.test-search-item {\n  width: 98%;\n  margin: auto;\n}\n\n.test-search-item ion-thumbnail {\n  width: 30px;\n  height: 20px;\n}\n\n.test-search-item ion-item {\n  --padding-start: 0px;\n}\n\n.test-search-item ion-list {\n  border-radius: 15px;\n  padding: 0px;\n}\n\n.test-search-item p {\n  margin: 0px;\n  padding-left: 16px;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.test-search-item span {\n  float: right;\n}\n\n.pincode-search-item {\n  width: 98%;\n  margin: auto;\n}\n\n.pincode-search-item ion-item {\n  --padding-start: 0px;\n}\n\n.pincode-search-item ion-list {\n  border-radius: 15px;\n  padding: 0px;\n}\n\n.pincode-search-item p {\n  margin: 0px;\n  padding-left: 16px;\n  font-size: 13px;\n  font-weight: bold;\n}\n\nion-slides {\n  height: 35%;\n}\n\nion-label {\n  margin-left: 14px;\n}\n\n.addtomore {\n  border-top: 1px solid #ddd;\n  padding: 10px 0px;\n}\n\n.booknow {\n  margin: 10px 0px;\n  /*--background:  var(--ion-color-primary);*/\n  --border-radius: 50px;\n}\n\n.category_name {\n  font-size: 14px;\n  width: 245px;\n  height: 56px;\n  font-weight: bold;\n  text-align: center;\n  padding: 12px 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.category_price {\n  font-size: 13px;\n  font-weight: bold;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n\n.category_des {\n  font-size: 14px;\n  margin: 0 10px 10px 10px;\n}\n\n.price {\n  color: #ea5b24;\n  font-size: 17px;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-right: 10px;\n}\n\n.categories-section {\n  background-image: url(\"https://demo.casethemes.net/organio/wp-content/uploads/2021/03/bg-section7.jpg\");\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n  padding-bottom: 50px;\n}\n\n.product_review {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  display: block ruby;\n}\n\n.colprod.ml-2 {\n  margin-left: 10px !important;\n  margin-bottom: 10px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;\n}\n\n.whychooseus {\n  padding: 50px 0;\n}\n\n.ShopByProducts {\n  padding-bottom: 50px;\n}\n\n.addtocart {\n  background: transparent;\n  color: #ea5b24;\n  padding: 7px 10px;\n  font-size: 13px;\n  border-radius: 20px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  border: 1px solid;\n  text-transform: uppercase;\n}\n\n.frequentlytopProducts {\n  background-image: url('pop_contbg.png');\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-size: cover;\n  text-align: center;\n}\n\n/*.grid-item-inner {\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n}*/\n\n.popimg {\n  width: 108px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.elementor-widget-ct_fancy_box {\n  cursor: pointer;\n}\n\n.pop_pk {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.topRatedProducts {\n  text-align: center;\n}\n\n.mid .discount {\n  border-bottom: 1px solid #ddd;\n}\n\n.mid .discount h5 {\n  padding: 10px 0px;\n  text-transform: uppercase;\n  margin: 0px;\n  font-family: \"Poppins-Medium\";\n  background: #3c4252;\n  font-size: 14px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 0px;\n  color: #fff;\n}\n\n.mid.second .discount {\n  border-bottom: 1px solid #ddd;\n}\n\n.mid.second .discount h5 {\n  padding: 10px 0px;\n  text-transform: uppercase;\n  margin: 0px;\n  font-family: \"Poppins-Medium\";\n  background: #3c4252;\n  font-size: 14px;\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 0px;\n  color: #fff;\n}\n\n.topRatedProducts .grid-item-inner {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 10px 10px 0 0;\n  margin-bottom: 1px;\n}\n\n.uptopmp {\n  padding: 0 10px;\n}\n\n.uptopmp img {\n  margin: 5px 0px;\n}\n\n.mpopimg {\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  position: absolute;\n  top: 0px;\n  left: 40%;\n  padding: 10px;\n  background: #fff;\n}\n\n.category_namemp {\n  font-family: Poppins-Medium;\n  font-size: 20px;\n  padding-top: 60px;\n  line-height: 26px;\n  height: 104px;\n}\n\n.parameter {\n  text-align: left;\n}\n\n.desmp.uptopmp ul {\n  text-align: center;\n  height: 55px;\n}\n\n.desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\n\n.mrpricemp {\n  font-size: 15px;\n  text-decoration: line-through;\n  color: #fa8152;\n  font-weight: bold;\n}\n\n.pricemp {\n  font-size: 15px;\n  color: #fa8152;\n  font-weight: bold;\n}\n\n.butkmore {\n  border-top: 1px solid #ddd;\n}\n\n.know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.ShopByProducts {\n  background: #f5f7fc;\n}\n\n.grid-item-innerha {\n  text-align: center;\n}\n\n.desha {\n  margin: 7px 0;\n}\n\n.category_nameha {\n  font-size: 20px;\n  color: #007c9d;\n  font-family: Poppins-Medium;\n  /*font-weight: bold;\n  text-transform: uppercase;*/\n  padding-top: 15px;\n  line-height: 20px;\n  margin: 0;\n}\n\n.viewall {\n  background: white;\n  color: #ea5b24;\n  padding: 8px 20px;\n  font-size: 14px;\n  border-radius: 20px;\n  margin: 30px auto;\n  text-align: center;\n  border: 1px solid;\n  text-transform: uppercase;\n  display: inline-block;\n}\n\n.topRatedProducts .viewall {\n  color: #007c9d;\n}\n\n.radgridtest {\n  font-size: 14px;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.radgridtest .pricelbl {\n  width: 50%;\n  font-family: \"Poppins-Medium\";\n}\n\n.radgridtest .pricelbl span {\n  color: red;\n  font-weight: bold;\n  text-decoration: line-through;\n}\n\n.radgridtestbox {\n  text-align: center;\n  font-size: 14px;\n  margin: 0 0px;\n  cursor: pointer;\n}\n\n.radgridtestbox img {\n  max-width: 40%;\n}\n\n.majorcity {\n  background: #3f3f3f;\n}\n\n.mcity {\n  line-height: 24px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.majorcity {\n  background: #3f3f3f;\n  padding-bottom: 40px;\n}\n\n.mcityt {\n  float: left;\n}\n\n.searchbar-input {\n  background: #FFF !important;\n  border-radius: 50px !important;\n  font-size: 13px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important;\n  border: 1px solid #008f47 !important;\n  color: #008f47 !important;\n  font-weight: bold;\n}\n\n.ct-header-main {\n  margin: 10px 0;\n  padding-bottom: 10px;\n  box-shadow: none !important;\n}\n\n.uptopmp {\n  padding: 0 10px;\n}\n\n.category_namepo {\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-top: 20px;\n  line-height: 30px;\n}\n\n.desmp ul {\n  text-align: center;\n  height: auto;\n}\n\n.desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\n\n.butkmore {\n  text-align: center;\n}\n\n.butkmore .know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.mid {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n  margin: 16px 8px 20%;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.mid.second {\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n\n.uptopmptop {\n  border-bottom: 1px solid #ddd;\n  padding: 7px 0;\n}\n\n.uptopmpprice {\n  display: -webkit-box;\n  display: flex;\n  color: red;\n}\n\n.butbook {\n  text-align: center;\n}\n\n.butbook .know_more {\n  margin: 15px;\n  color: #fff;\n  background: #007c9d;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.prosec {\n  padding: 20px 10px;\n}\n\n.discountd {\n  background: #3c4252;\n  color: #fff;\n  margin: 0;\n  padding: 0;\n}\n\n.discountd h5 {\n  margin: 0;\n  padding: 8px 0;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.pricelbl i {\n  font-family: arial;\n  font-weight: bold;\n}\n\n.desha {\n  height: 55px;\n  overflow: hidden;\n}\n\n.raditestcon {\n  padding: 20px 0 10px;\n}\n\n.tags div {\n  float: left;\n  margin-bottom: 8px;\n}\n\n.certxt {\n  color: #fff;\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 10px;\n}\n\n.certxt span {\n  font-weight: bold;\n}\n\n.main_slider {\n  background-image: url('banner.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURHQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtBQ0FKOztBRENJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNKLFFBQUE7QUNDSjs7QURFQTtFQUFPLGtCQUFBO0VBQ1AsaUJBQUE7RUFDQSxxQkFBQTtBQ0VBOztBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQVkseUJBQUE7QUNDaEI7O0FEQUk7RUFBUyxrQkFBQTtFQUNiLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0ksUUFBQTtBQ0dKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNFSjs7QURESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR1I7O0FEREk7RUFDSSxvQkFBQTtBQ0dSOztBRERJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDR1I7O0FEREk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURESTtFQUNJLFlBQUE7QUNHUjs7QURBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDR0o7O0FERkk7RUFDSSxvQkFBQTtBQ0lSOztBREZJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDSVI7O0FERkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNJUjs7QURE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QUM0SEY7O0FEekhBO0VBQVEsV0FBQTtFQUFZLGtCQUFBO0VBQ3BCLGVBQUE7RUFBZ0IsbUJBQUE7QUMrSGhCOztBRDlIQTtFQUFhLGlCQUFBO0FDa0liOztBRGhJQTtFQUFjLG1DQUFBO0VBQ1YsMkJBQUE7RUFDQSw0QkFBQTtFQUE2QixzQkFBQTtBQ3FJakMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTQ0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgfVxufVxuLnNlYXJjaC10YWd7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gICAgfVxufVxuLnRhZ3Mge3BhZGRpbmctbGVmdDogMTRweDtcbm1hcmdpbjogOHB4IDAgMXB4O1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNvY3NlcmNoe1xuICAgXG59XG4udGFncyBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDBweCAycHg7XG4gICAgcGFkZGluZzogNHB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiAjMDAwO2JvcmRlcjogMXB4IHNvbGlkICNlYTViMjQ7XG4gICAgaW9uLWljb257cG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAycHg7XG5jb2xvcjogI2ZmZjtcbmJhY2tncm91bmQ6ICNlYTViMjQ7XG5ib3JkZXItcmFkaXVzOiA1MHB4O1xucGFkZGluZzogMnB4O1xuZm9udC1zaXplOiAxMHB4O1xuICAgIHRvcDogMnB4O1xuICAgIH1cbn1cblxuLnRlc3Qtc2VhcmNoLWl0ZW17XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaW9uLXRodW1ibmFpbHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBzcGFue1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuLnBpbmNvZGUtc2VhcmNoLWl0ZW17XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDM1JTtcbn1cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4uYWRkdG9tb3Jle1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIFxufVxuLmJvb2tub3d7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAvKi0tYmFja2dyb3VuZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsqL1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5jYXRlZ29yeV9uYW1lIHtmb250LXNpemU6IDE0cHg7d2lkdGg6IDI0NXB4O1xuaGVpZ2h0OiA1NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY2F0ZWdvcnlfcHJpY2V7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAgMDttYXJnaW46IDA7XG59XG4uY2F0ZWdvcnlfZGVzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xufVxuLnByaWNle2NvbG9yOiAjZWE1YjI0O2ZvbnQtc2l6ZTogMTdweDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xucGFkZGluZy10b3A6IDVweDtcbnBhZGRpbmctcmlnaHQ6IDEwcHg7fVxuLmNhdGVnb3J5X2ltZyB7fVxuLmNhdGVnb3JpZXMtc2VjdGlvbntiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2RlbW8uY2FzZXRoZW1lcy5uZXQvb3JnYW5pby93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMy9iZy1zZWN0aW9uNy5qcGdcIik7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmctYm90dG9tOiA1MHB4O31cblxuLnByb2R1Y3RfcmV2aWV3e3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiAgMDttYXJnaW46IDA7ZGlzcGxheTogYmxvY2sgcnVieTt9XG4uY29scHJvZGZyZXt9XG5cblxuLmNvbHByb2QubWwtMnttYXJnaW4tbGVmdDogMTBweCAgIWltcG9ydGFudDttYXJnaW4tYm90dG9tOiAxMHB4O2JhY2tncm91bmQ6ICNmZmY7Ym9yZGVyLXJhZGl1czogMTBweDtcbmJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDE1cHggMjVweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNXB4IDEwcHg7fVxuXG4ud2h5Y2hvb3NldXMge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbn1cblxuLlNob3BCeVByb2R1Y3Rze3BhZGRpbmctYm90dG9tOiA1MHB4O31cbi5hZGR0b2NhcnR7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5jb2xvcjogI2VhNWIyNDtcbnBhZGRpbmc6IDdweCAxMHB4O1xuZm9udC1zaXplOiAxM3B4O1xuYm9yZGVyLXJhZGl1czogMjBweDtcbm1hcmdpbjogNHB4IGF1dG87XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5kaXNwbGF5OiBibG9jaztcbmJvcmRlcjogMXB4IHNvbGlkO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XG5cbi5mcmVxdWVudGx5dG9wUHJvZHVjdHN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wb3BfY29udGJnLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVsdGlwbGVjYXRze31cbi8qLmdyaWQtaXRlbS1pbm5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggOHB4IDEwcHg7XG59Ki9cbi5wb3BpbWcge3dpZHRoOiAxMDhweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHggMTBweCAwcHggMHB4O1xufVxuICAgICAgICBcbi5lbGVtZW50b3Itd2lkZ2V0LWN0X2ZhbmN5X2JveCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvcF9wayB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4udG9wUmF0ZWRQcm9kdWN0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1pZCAuZGlzY291bnR7XG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICBoNSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1NZWRpdW0nO1xuICAgICAgICBiYWNrZ3JvdW5kOiMzYzQyNTI7XG5mb250LXNpemU6IDE0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7Y29sb3I6ICNmZmY7XG4gICAgfVxufVxuLm1pZC5zZWNvbmQgLmRpc2NvdW50e1xuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgaDUge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTWVkaXVtJztcbiAgICAgICAgYmFja2dyb3VuZDojM2M0MjUyO1xuZm9udC1zaXplOiAxNHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MHB4IDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweCA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowcHg7Y29sb3I6ICNmZmY7XG4gICAgfVxufVxuLnRvcFJhdGVkUHJvZHVjdHMgLmdyaWQtaXRlbS1pbm5lcnt0ZXh0LWFsaWduOiBjZW50ZXI7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG5tYXJnaW4tYm90dG9tOiAxcHg7fVxuLnVwdG9wbXB7cGFkZGluZzogMCAxMHB4OyB9XG4udXB0b3BtcCBpbWd7bWFyZ2luOjVweCAwcHg7fVxuLm1wb3BpbWd7Ym9yZGVyLXJhZGl1czogNTBweDtcbmJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6MHB4O1xubGVmdDogNDAlO1xucGFkZGluZzogMTBweDtcbmJhY2tncm91bmQ6ICNmZmY7fVxuLmNhdGVnb3J5X25hbWVtcHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O2xpbmUtaGVpZ2h0OiAyNnB4O1xuaGVpZ2h0OiAxMDRweDtcbn1cbi5wYXJhbWV0ZXJ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRlc21wLnVwdG9wbXAgdWx7dGV4dC1hbGlnbjogY2VudGVyO2hlaWdodDogNTVweDt9XG4uZGVzbXAgbGl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9idWxfY2hrLnBuZycpO1xuYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4O1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtsaXN0LXN0eWxlOiBub25lO2ZvbnQtc2l6ZTogMTRweDtcbnRleHQtYWxpZ246IGxlZnQ7XG5wYWRkaW5nLWxlZnQ6IDI1cHg7fVxuLm1ycHJpY2VtcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjZmE4MTUyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByaWNlbXAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogI2ZhODE1MjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idXRrbW9yZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG4ua25vd19tb3JlIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgY29sb3I6ICMwMDdjOWQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uU2hvcEJ5UHJvZHVjdHMge2JhY2tncm91bmQ6ICNmNWY3ZmM7fVxuLmdyaWQtaXRlbS1pbm5lcmhhIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmRlc2hhIHtcbiAgICBtYXJnaW46N3B4IDA7XG59XG4uY2F0ZWdvcnlfbmFtZWhhe2ZvbnQtc2l6ZTogMjBweDtjb2xvcjogIzAwN2M5ZDtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4vKmZvbnQtd2VpZ2h0OiBib2xkO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xucGFkZGluZy10b3A6MTVweDtcbmxpbmUtaGVpZ2h0OjIwcHg7bWFyZ2luOiAwO31cblxuLnZpZXdhbGx7YmFja2dyb3VuZDogd2hpdGU7XG5jb2xvcjogI2VhNWIyNDtcbnBhZGRpbmc6IDhweCAyMHB4O1xuZm9udC1zaXplOiAxNHB4O1xuYm9yZGVyLXJhZGl1czogMjBweDtcbm1hcmdpbjogMzBweCBhdXRvO1xudGV4dC1hbGlnbjogY2VudGVyO1xuYm9yZGVyOiAxcHggc29saWQ7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO31cbi50b3BSYXRlZFByb2R1Y3RzIC52aWV3YWxse2NvbG9yOiAjMDA3YzlkO31cbi5yYWRncmlkdGVzdCB7Zm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAucHJpY2VsYmx7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTWVkaXVtJztcbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuICB9XG59XG4ucmFkZ3JpZHRlc3Rib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBpbWcge1xuICAgIG1heC13aWR0aDogNDAlO1xuICB9XG59XG4ubWFqb3JjaXR5IHtcbiAgYmFja2dyb3VuZDogIzNmM2YzZjtcbn1cbi5tY2l0eSB7bGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFqb3JjaXR5e1xuICBiYWNrZ3JvdW5kOiAjM2YzZjNmO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi5tY2l0eXR7ZmxvYXQ6bGVmdDt9XG5cbi5zZWFyY2hiYXItaW5wdXQge1xuICAgIGJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZjQ3ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDhmNDcgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmN0LWhlYWRlci1tYWlue1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkLWl0ZW0taW5uZXItbmV3IHtcbn1cbi51cHRvcG1we3BhZGRpbmc6IDAgMTBweDt9XG4uY2F0ZWdvcnlfbmFtZXBve1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5kZXNtcCB1bHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmRlc21wIGxpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi8uLi9hc3NldHMvYnVsX2Noay5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtsaXN0LXN0eWxlOiBub25lO2ZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5idXRrbW9yZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5rbm93X21vcmUge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBjb2xvcjogIzAwN2M5ZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2M5ZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDt9XG59XG4ubWlke1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAwcHggOHB4IDEwcHg7XG4gICAgbWFyZ2luOiAxNnB4IDhweCAyMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4IDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyMHB4O1xuICAgIFxufVxuLm1pZC5zZWNvbmR7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czowcHggO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoyMHB4IDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjIwcHg7XG59XG4udXB0b3BtcHRvcCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA3cHggMDtcbn1cbi51cHRvcG1wcHJpY2V7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGNvbG9yOnJlZDtcbn1cblxuLmJ1dGJvb2sge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAua25vd19tb3JlIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2M5ZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2M5ZDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cbi5wcm9zZWN7cGFkZGluZzoyMHB4IDEwcHg7fVxuLmRpc2NvdW50ZHtiYWNrZ3JvdW5kOiAjM2M0MjUyO1xuY29sb3I6ICNmZmY7XG5tYXJnaW46IDA7XG5wYWRkaW5nOiAwO31cbi5kaXNjb3VudGQgaDV7bWFyZ2luOiAwO1xucGFkZGluZzo4cHggMDtcbmZvbnQtc2l6ZTogMTVweDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO2ZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG5mb250LXNpemU6IDE0cHg7fVxuLnByaWNlbGJsIGl7ICBmb250LWZhbWlseTogYXJpYWwgO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNoYSB7XG4gIGhlaWdodDo1NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnJhZGl0ZXN0Y29uIHtcbiAgcGFkZGluZzogMjBweCAwIDEwcHg7XG59XG4udGFncyBkaXYge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uY2VydHh0e2NvbG9yOiAjZmZmO3RleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtc2l6ZTogMjJweDttYXJnaW4tYm90dG9tOiAxMHB4O31cbi5jZXJ0eHQgc3Bhbntmb250LXdlaWdodDogYm9sZDt9XG5cbi5tYWluX3NsaWRlcnsgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYW5uZXIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3Zlcjt9IiwiLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDE0NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAxMHB4O1xufVxuXG4uc2VhcmNoLXRhZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5zZWFyY2gtdGFnIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zZWFyY2gtdGFnIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cblxuLnRhZ3Mge1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIG1hcmdpbjogOHB4IDAgMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50YWdzIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTViMjQ7XG59XG4udGFncyBzcGFuIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNlYTViMjQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0b3A6IDJweDtcbn1cblxuLnRlc3Qtc2VhcmNoLWl0ZW0ge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IGF1dG87XG59XG4udGVzdC1zZWFyY2gtaXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi50ZXN0LXNlYXJjaC1pdGVtIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4udGVzdC1zZWFyY2gtaXRlbSBpb24tbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi50ZXN0LXNlYXJjaC1pdGVtIHAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRlc3Qtc2VhcmNoLWl0ZW0gc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnBpbmNvZGUtc2VhcmNoLWl0ZW0ge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IGF1dG87XG59XG4ucGluY29kZS1zZWFyY2gtaXRlbSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuLnBpbmNvZGUtc2VhcmNoLWl0ZW0gaW9uLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4ucGluY29kZS1zZWFyY2gtaXRlbSBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMzUlO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cblxuLmFkZHRvbW9yZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLmJvb2tub3cge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICAvKi0tYmFja2dyb3VuZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsqL1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jYXRlZ29yeV9uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMjQ1cHg7XG4gIGhlaWdodDogNTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXRlZ29yeV9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2F0ZWdvcnlfZGVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XG59XG5cbi5wcmljZSB7XG4gIGNvbG9yOiAjZWE1YjI0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2F0ZWdvcmllcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9kZW1vLmNhc2V0aGVtZXMubmV0L29yZ2FuaW8vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDMvYmctc2VjdGlvbjcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4ucHJvZHVjdF9yZXZpZXcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2sgcnVieTtcbn1cblxuLmNvbHByb2QubWwtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDE1cHggMjVweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNXB4IDEwcHg7XG59XG5cbi53aHljaG9vc2V1cyB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cblxuLlNob3BCeVByb2R1Y3RzIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5hZGR0b2NhcnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNlYTViMjQ7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogNHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZnJlcXVlbnRseXRvcFByb2R1Y3RzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3BvcF9jb250YmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKi5ncmlkLWl0ZW0taW5uZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDhweCAxMHB4O1xufSovXG4ucG9waW1nIHtcbiAgd2lkdGg6IDEwOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmVsZW1lbnRvci13aWRnZXQtY3RfZmFuY3lfYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wX3BrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi50b3BSYXRlZFByb2R1Y3RzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWlkIC5kaXNjb3VudCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLm1pZCAuZGlzY291bnQgaDUge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGJhY2tncm91bmQ6ICMzYzQyNTI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5taWQuc2Vjb25kIC5kaXNjb3VudCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLm1pZC5zZWNvbmQgLmRpc2NvdW50IGg1IHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBiYWNrZ3JvdW5kOiAjM2M0MjUyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b3BSYXRlZFByb2R1Y3RzIC5ncmlkLWl0ZW0taW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLnVwdG9wbXAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi51cHRvcG1wIGltZyB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLm1wb3BpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA0MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jYXRlZ29yeV9uYW1lbXAge1xuICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4ucGFyYW1ldGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRlc21wLnVwdG9wbXAgdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTVweDtcbn1cblxuLmRlc21wIGxpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2J1bF9jaGsucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4ubXJwcmljZW1wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICNmYTgxNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpY2VtcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmYTgxNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0a21vcmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmtub3dfbW9yZSB7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLlNob3BCeVByb2R1Y3RzIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYztcbn1cblxuLmdyaWQtaXRlbS1pbm5lcmhhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVzaGEge1xuICBtYXJnaW46IDdweCAwO1xufVxuXG4uY2F0ZWdvcnlfbmFtZWhhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwN2M5ZDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICAvKmZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyovXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udmlld2FsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogI2VhNWIyNDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvcFJhdGVkUHJvZHVjdHMgLnZpZXdhbGwge1xuICBjb2xvcjogIzAwN2M5ZDtcbn1cblxuLnJhZGdyaWR0ZXN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJhZGdyaWR0ZXN0IC5wcmljZWxibCB7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG59XG4ucmFkZ3JpZHRlc3QgLnByaWNlbGJsIHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5yYWRncmlkdGVzdGJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDAgMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmFkZ3JpZHRlc3Rib3ggaW1nIHtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG5cbi5tYWpvcmNpdHkge1xuICBiYWNrZ3JvdW5kOiAjM2YzZjNmO1xufVxuXG4ubWNpdHkge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1ham9yY2l0eSB7XG4gIGJhY2tncm91bmQ6ICMzZjNmM2Y7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4ubWNpdHl0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjRkZGICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDhmNDcgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDhmNDcgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jdC1oZWFkZXItbWFpbiB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udXB0b3BtcCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmNhdGVnb3J5X25hbWVwbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmRlc21wIHVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5kZXNtcCBsaSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9idWxfY2hrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmJ1dGttb3JlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1dGttb3JlIC5rbm93X21vcmUge1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiAjMDA3YzlkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YzlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5taWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDhweCAxMHB4O1xuICBtYXJnaW46IDE2cHggOHB4IDIwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5taWQuc2Vjb25kIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbn1cblxuLnVwdG9wbXB0b3Age1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogN3B4IDA7XG59XG5cbi51cHRvcG1wcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnV0Ym9vayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idXRib29rIC5rbm93X21vcmUge1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDA3YzlkO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YzlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wcm9zZWMge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbi5kaXNjb3VudGQge1xuICBiYWNrZ3JvdW5kOiAjM2M0MjUyO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGlzY291bnRkIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcmljZWxibCBpIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlc2hhIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmFkaXRlc3Rjb24ge1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcbn1cblxuLnRhZ3MgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNlcnR4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNlcnR4dCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYWluX3NsaWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYW5uZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/profile-modal/profile-modal.page */ "./src/app/pages/profile-modal/profile-modal.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");











let HomePage = class HomePage {
    constructor(geolocation, router, api, util, modalController, navCtrl, alertCtrl, menu, http) {
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
        this.city = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].major;
        // this.getAssociatedTests();
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
        this.getAllPincodes();
        // this.getAllSecondaryLabs();
        this.api.getStates().then(data => {
            this.states = data;
        }).catch(error => {
            console.log(error);
        });
        this.util.subscribeCityLocation().subscribe(data => {
            this.getCity(data);
        });
        this.util.subscribeStateLocation().subscribe(data => {
            this.getStateId(data);
        });
        this.util.subscribeQuery().subscribe(data => {
            this.openQuery();
        });
        this.menu.enable(true);
        this.mobile = localStorage.getItem('mobile');
        this.api.getCitiesForHome().then(data => {
            this.cities = data;
            console.log(this.cities);
        }).catch(error => {
            console.log(error);
        });
        this.api.getWebBanners().then(data => {
            for (let x of data) {
                console.log(data);
                if (x.page_name == 'row_1') {
                    this.row_1_banner.push(x);
                    console.log(this.row_1_banner);
                }
                else if (x.page_name == 'row_2') {
                    this.row_2_banner = x.banner;
                    console.log(this.row_2_banner);
                }
                // } else if(x.page_name == 'row_3_col_1') {
                //   this.row_3_col_1_banner = x;
                // } else if(x.page_name == 'row_3_col_2') {
                //   this.row_3_col_2_banner = x;
                // }
            }
        }).catch(error => {
            console.log(error);
        });
        const uid = sessionStorage.getItem('uid');
        this.api.getMyProfile(uid).then((data) => {
            this.profile = data;
            console.log(this.profile);
            if (this.profile.name == '') {
                console.log(this.profile.name);
                this.openModal();
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_8__["ProfileModalPage"],
                cssClass: 'profileCss',
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    getPrimaryLabs() {
        this.api.getPrimaryLab().then(data => {
            this.primary_lab = data;
            console.log(this.primary_lab);
        }).catch(error => {
            console.log(error);
        });
    }
    getLabsCount() {
        this.api.getLabCount().then(data => {
            this.total_lab = data;
            console.log(this.primary_lab);
        }).catch(error => {
            console.log(error);
        });
    }
    getAssociatedTests() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getAssociatedTests().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                this.associated_tests = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getFacilities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getFacilities().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                this.facilities = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getReviews() {
        this.api.getReviews().then(data => {
            // console.log(data);
            this.reviews = data;
        }).catch(error => {
            console.log(error);
        });
    }
    getPopularTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getHomeIndividualPopularTest().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.popular_tests = data;
                if (data.length > 0) {
                    this.popular_tests.forEach((element) => {
                        element.mrp = (element.mrp == undefined ? 0 : element.mrp);
                        element.labs = (element.labs == undefined ? 0 : element.labs);
                        element.price = (element.price == undefined ? 0 : element.price);
                    });
                }
                console.log(this.popular_tests);
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getPopularPackage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getMostPopularPackage().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.popular_packages = data;
                if (data.length > 0) {
                    this.popular_packages.forEach((element) => {
                        element.mrp = (element.mrp == undefined ? 0 : element.mrp);
                        element.labs = (element.labs == undefined ? 0 : element.labs);
                        element.price = (element.price == undefined ? 0 : element.price);
                    });
                }
                console.log(this.popular_packages);
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getCardiologyTest() {
        this.api.getCardiologyTest().then(data => {
            this.cardiology_test = data;
            // console.log(this.cardiology_test)
        }).catch(error => {
            console.log(error);
        });
    }
    getRadiologyTest() {
        this.api.getRadiologyTest().then(data => {
            this.radiology_test = data;
        }).catch(error => {
            console.log(error);
        });
    }
    getBookings() {
        this.api.getAllBookings().then((data) => {
            this.bookings = data;
            // console.log(this.bookings)
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    getAllSecondaryLabs() {
        this.api.getAllSecondaryLabs().then((data) => {
            this.labs = data;
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    getAllTest() {
        this.api.getAllTest().then(data => {
            this.all_tests = data;
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    getAllPincodes() {
        this.api.getAllPincodes().then(data => {
            this.all_pincodes = data;
            // console.log(this.all_pincodes)
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    // doRefresh(event) {
    //   this.ionViewWillEnter();
    //   this.ngOnInit()
    //   setTimeout(() => {
    //     event.target.complete();
    //   }, 700);
    // }
    ionViewWillEnter() {
        this.addToBucket = [];
        this.newBucketArray = [];
        this.pincode = '';
        this.terms = '';
        this.getLocation();
        this.isLogin = sessionStorage.getItem('loginStatus');
        this.api.getIndividualTest().then(data => {
            this.all_test = data;
        }).catch(error => {
            console.log(error);
        });
        this.api.getSecondaryLabs().then(data => {
            this.all_labs = data;
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.api.getHealthHabbits().then(data => {
            this.habbits = data;
        }).catch(error => {
            console.log(error);
        });
        this.api.getHealthRisk().then(data => {
            this.risks = data;
        }).catch(error => {
            console.log(error);
        });
    }
    onInput($event, value) {
        console.log(value);
        if (value == 'test') {
            this.testLoad = true;
            this.pincodeLoad = false;
            if ($event.detail == null && this.terms == '') {
                this.testLoad = false;
            }
        }
        else {
            this.pincodeLoad = true;
            this.testLoad = false;
            if ($event.detail == null && this.pincode == '') {
                this.pincodeLoad = false;
            }
        }
    }
    onCancel($event, value) {
        if (value == 'test') {
            this.testLoad = false;
        }
        else {
            this.pincodeLoad = false;
        }
    }
    select(data) {
        console.log(data);
        this.pincode = data.pincode;
        localStorage.setItem('pincode', this.pincode);
        this.pincodeLoad = false;
    }
    add(data) {
        this.terms = '';
        this.testLoad = false;
        console.log(this.addToBucket.length);
        if (this.addToBucket.length == 0) {
            this.newBucketArray.push(data.test_name);
            this.addToBucket.push(data.id);
            console.log(this.newBucketArray, this.addToBucket);
        }
        else {
            var a = this.addToBucket.indexOf(data.id);
            if (a == 0) {
                this.util.showToast('Test already selected', 'primary', 'middle');
            }
            else if (a == -1) {
                this.newBucketArray.push(data.test_name);
                this.addToBucket.push(data.id);
                console.log(this.newBucketArray, this.addToBucket);
            }
            else {
                this.util.showToast('Test already selected', 'primary', 'middle');
            }
        }
    }
    remove(index) {
        this.newBucketArray.splice(index, 1);
        this.addToBucket.splice(index, 1);
        localStorage.setItem('newBucketArray', this.newBucketArray);
        localStorage.setItem('addToBucket', this.addToBucket);
        if (this.addToBucket.length == 0) {
            this.testLoad = false;
        }
    }
    getLocation() {
        console.log('1');
        this.geolocation.getCurrentPosition().then((resp) => {
            localStorage.setItem('lat', resp.coords.latitude.toString());
            localStorage.setItem('lng', resp.coords.longitude.toString());
            this.getAddress(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        // let watch = this.geolocation.watchPosition();
        // watch.subscribe((data) => {
        //   // console.log('live update', data);
        //   localStorage.setItem('lat', data.coords.latitude.toString());
        //   localStorage.setItem('lng', data.coords.longitude.toString());
        //   this.getAddress(data.coords.latitude, data.coords.longitude);
        // });
    }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        console.log(lat1, lon1, lat2, lon2);
        const earthRadiusKm = 6371;
        const dLat = this.degreesToRadians(lat2 - lat1);
        const dLon = this.degreesToRadians(lon2 - lon1);
        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }
    getAddress(lat, lng) {
        // console.log(lat,lng)
        let geocoder = new google.maps.Geocoder();
        let location = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'location': location }, (results, status) => {
            // console.log(results)
            this.address = results[0].formatted_address;
            // console.log(this.address);  
            localStorage.setItem('address', results[0].formatted_address);
            let city;
            let state;
            let pincode;
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
            let current_pincode = pincode.short_name;
            //city data
            let current_city = city.short_name;
            let current_state = state.long_name;
            this.getCity(current_city);
            this.getStateId(current_state);
            localStorage.setItem('current_pincode', current_pincode);
            localStorage.setItem('current_city', current_city);
            localStorage.setItem('current_state', current_state);
            console.log('trigger event');
            this.util.publishCityLocation(current_city);
            this.util.subscribeCity().subscribe(data => {
                console.log(data);
                this.getCity(data);
            });
        });
    }
    getCity(data) {
        this.api.getCityByCityName(data).then((data) => {
            // console.log(data);
            if (data && data.length) {
                this.getPincode(data[0].id);
            }
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getPincode(id) {
        this.deliveries_pincode = [];
        this.pincodeLoad = false;
        this.api.getPincodeByCityId(id).then((data) => {
            // console.log(data);
            if (data && data.length) {
                console.log(data);
                this.deliveries_pincode = data;
            }
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getStateId(state) {
        // console.log(state)
        for (let x of this.states) {
            if (x.name == state) {
                // console.log(x.id)
                localStorage.setItem('state_id', x.id);
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
    book(data) {
        var prdexist = false;
        if (this.addToBucket.length > 0) {
            for (var x of this.addToBucket) {
                if (x == data.id) {
                    prdexist = true;
                }
            }
        }
        if (prdexist == false) {
            this.util.showToast('Test added in search bar, Please enter your pincode', 'primary', 'middle');
            this.addToBucket.push(data.id);
            this.newBucketArray.push(data.test_name);
            localStorage.setItem('addToBucket', this.addToBucket);
            localStorage.setItem('newBucketArray', this.newBucketArray);
        }
        else {
            this.util.showToast('Test already selected in search bar, Please enter your pincode', 'danger', 'middle');
        }
        this.pincode = localStorage.getItem('pincode');
        if (this.pincode == undefined) {
            this.pincode = localStorage.getItem('current_pincode');
        }
        console.log(this.addToBucket);
        console.log(this.newBucketArray);
        // this.searchLabs2();
    }
    searchLabs2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.addToBucket.length === 0) {
                this.util.showToast('Select your test', 'danger', 'bottom');
                return false;
            }
            else if (this.pincode === '' || this.pincode == null) {
                this.util.showToast('Pincode is required', 'danger', 'bottom');
                return false;
            }
            console.log(this.pincode);
            yield this.api.getSecondaryLabsByPin(this.pincode).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.secondary_labs = data;
                if (this.secondary_labs.length === 0) {
                    this.util.showToast('There are no labs found for this pincode', 'danger', 'bottom');
                    return false;
                }
                console.log(this.secondary_labs);
                console.log(this.addToBucket);
                this.associated_test = [];
                if (data) {
                    var i = 1;
                    yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        console.log(element.primarylab);
                        yield this.api.getVenueDetails(element.primarylab).then((data6) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            console.log(data6);
                            if (data6) {
                                element.primarylabdata = data6;
                                element.primarylogo = data6.logo;
                            }
                        })).catch(error => {
                            this.util.hide();
                            console.log(error);
                        });
                        console.log(element);
                        var j = 1;
                        for (var y of this.addToBucket) {
                            console.log(y);
                            yield this.api.getAssociatedTestByProductAndBranch(element.uid, y).then((data1) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                console.log(data1);
                                if (data1.length > 0) {
                                    yield this.api.getLabTestById(data1[0].individual_test).then((data2) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        if (data2.length > 0) {
                                            data1[0].itid = data2[0];
                                        }
                                    })).catch(error => {
                                        this.util.hide();
                                        console.log(error);
                                    });
                                    this.associated_test.push(data1[0]);
                                    console.log(i + "==" + this.secondary_labs.length + "&&" + j + "==" + this.addToBucket.length);
                                }
                                if (i == this.secondary_labs.length && j == this.addToBucket.length) {
                                    yield this.searchLabs3();
                                }
                            })).catch(error => {
                                this.util.hide();
                                console.log(error);
                            });
                            j++;
                        }
                        if (i == this.secondary_labs.length && this.associated_test.length == 0) {
                            yield this.searchLabs3();
                        }
                        i++;
                    }));
                }
                else {
                    yield this.searchLabs3();
                }
            })).catch(error => {
                this.util.hide();
                console.log(error);
            });
        });
    }
    searchLabs5() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getSecondaryLabsByPin(this.pincode).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                this.secondary_labs = data;
                this.associated_test = [];
                if (data) {
                    var i = 1;
                    yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        var j = 1;
                        for (var y of this.addToBucket) {
                            yield this.api.getAssociatedTestByProductAndBranch(element.uid, y).then((data1) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                console.log(data1);
                                if (data1.length > 0) {
                                    this.associated_test.push(data1[0]);
                                    console.log(i + "==" + this.secondary_labs.length + "&&" + j + "==" + this.addToBucket.length);
                                    if (i == this.secondary_labs.length && j == this.addToBucket.length) {
                                        yield this.searchLabs3();
                                    }
                                }
                            })).catch(error => {
                                this.util.hide();
                                console.log(error);
                            });
                            j++;
                        }
                        if (i == this.secondary_labs.length && this.associated_test.length == 0) {
                            yield this.searchLabs3();
                        }
                        i++;
                    }));
                }
            })).catch(error => {
                this.util.hide();
                console.log(error);
            });
        });
    }
    searchLabs3() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.addToBucket.length === 0) {
                this.util.showToast('Select your test', 'danger', 'bottom');
                return false;
            }
            else if (this.pincode === '') {
                this.util.showToast('Pincode is required', 'danger', 'bottom');
                return false;
            }
            this.util.show('Please wait....');
            let lat;
            let lng;
            if (this.pincode == localStorage.getItem('current_pincode')) {
                lat = localStorage.getItem('lat');
                lng = localStorage.getItem('lng');
            }
            else {
                var geocoder = new google.maps.Geocoder();
                var address = this.pincode;
                yield geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var latitude = results[0].geometry.location.lat();
                        var longitude = results[0].geometry.location.lng();
                        lat = latitude;
                        lng = longitude;
                        // alert("Latitude: " + latitude + "\nLongitude: " + longitude);
                    }
                    else {
                        alert("Request failed.");
                    }
                });
            }
            console.log(this.secondary_labs);
            // console.log(this.associated_test);
            yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var price = 0;
                var selling_price = 0;
                var all_test_data = [];
                var all_test1_data = [];
                var available_test = [];
                var not_available_test = [];
                console.log(this.associated_test);
                for (let x of this.associated_test) {
                    if (x.branch_id == element.uid) {
                        console.log('available data');
                        all_test_data.push(x);
                        available_test.push(x.itid.test_name);
                        price += x.price;
                        selling_price += x.selling_price;
                    }
                }
                for (let x of this.addToBucket) {
                    var is_available = false;
                    console.log(x);
                    for (var y of all_test_data) {
                        console.log(x + "==" + y.individual_test);
                        if (x == y.individual_test) {
                            is_available = true;
                        }
                    }
                    console.log(is_available);
                    if (is_available == false) {
                        all_test1_data.push(x);
                    }
                }
                console.log(all_test1_data);
                var test2data = [];
                //newBucketArray
                let difference = this.newBucketArray.filter(x => !available_test.includes(x));
                not_available_test.push(difference);
                test2data.push(difference);
                // for(var x of this.newBucketArray){
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
                var average_rating = 0;
                element.test_data = all_test_data;
                element.test1_data = all_test1_data;
                element.available_test = available_test;
                element.not_available_test = not_available_test;
                element.price = price;
                element.selling_price = selling_price;
                var distance = yield this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
                element.distance = distance;
                var rating_array = [];
                var facilities = [];
                for (let x of this.facilities) {
                    for (let y of element.facility) {
                        if (x.id == y) {
                            facilities.push(x);
                        }
                    }
                }
                console.log(facilities);
                element.facilities = facilities;
                for (let x of this.reviews) {
                    if (x.lab_id == element.id) {
                        rating_array.push(x);
                    }
                }
                element.total_reviews = 0;
                if (rating_array.length > 0) {
                    var avgrate = 0;
                    var rating_length = rating_array.length;
                    for (var x of rating_array) {
                        avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                    }
                    average_rating = avgrate / rating_length;
                    element.total_reviews = rating_array.length;
                }
                element.average_rating = average_rating;
            }));
            console.log(this.secondary_labs);
            // return false;
            this.secondary_labs.sort(this.compare);
            var newSortedArray = [];
            for (var x of this.secondary_labs) {
                if (x.test_data.length > 0) {
                    newSortedArray.push(x);
                }
            }
            this.secondary_labs = newSortedArray;
            console.log(this.secondary_labs);
            console.log(this.newBucketArray);
            console.log(this.addToBucket);
            const circularReplacer = () => {
                // Creating new WeakSet to keep 
                // track of previously seen objects
                const seen = new WeakSet();
                return (key, value) => {
                    // If type of value is an 
                    // object or value is null
                    if (typeof (value) === "object"
                        && value !== null) {
                        // If it has been seen before
                        if (seen.has(value)) {
                            return;
                        }
                        // Add current value to the set
                        seen.add(value);
                    }
                    // return the value
                    return value;
                };
            };
            let arr = [];
            for (let x of this.secondary_labs) {
                arr.push({
                    address: x.address,
                    available_test: x.available_test,
                    cod: x.cod,
                    cover: x.cover,
                    distance: x.distance,
                    price: x.price,
                    selling_price: x.selling_price,
                    total_reviews: x.total_reviews,
                    facilities: x.facilities,
                    id: x.id,
                    lat: x.lat,
                    lng: x.lng,
                    name: x.name,
                    lab_timings: x.lab_timings,
                    not_available_test: x.not_available_test,
                    logo: x.logo,
                    range_price: x.range_price,
                    service_delivery: x.service_delivery,
                    test1_data: x.test1_data,
                    test_data: x.test_data,
                    free_charge: x.free_charge,
                    page_slug: x.page_slug,
                    primarylogo: x.primarylogo,
                    primarylabdata: x.primarylabdata
                });
            }
            var jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(arr);
            localStorage.setItem('labsdata', jsonString);
            localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(this.newBucketArray));
            localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(this.addToBucket));
            this.util.hide();
            this.router.navigate(['search-labs']);
        });
    }
    searchLabs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.addToBucket.length === 0) {
                this.util.showToast('Select your test', 'danger', 'bottom');
                return false;
            }
            else if (this.pincode === '') {
                this.util.showToast('Pincode is required', 'danger', 'bottom');
                return false;
            }
            this.util.show('Please wait....');
            this.secondary_labs = [];
            let lat;
            let lng;
            if (this.pincode == localStorage.getItem('current_pincode')) {
                lat = localStorage.getItem('lat');
                lng = localStorage.getItem('lng');
            }
            else {
                var geocoder = new google.maps.Geocoder();
                var address = this.pincode;
                yield geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var latitude = results[0].geometry.location.lat();
                        var longitude = results[0].geometry.location.lng();
                        lat = latitude;
                        lng = longitude;
                        // alert("Latitude: " + latitude + "\nLongitude: " + longitude);
                    }
                    else {
                        alert("Request failed.");
                    }
                });
            }
            yield this.getAssociatedTest();
            yield this.api.getSecondaryLabs().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.all_labs = data;
                let pincode = [];
                this.util.hide();
                for (let x of this.all_labs) {
                    let delivery_pincode = [];
                    for (let y of x.delivery_pincode) {
                        console.log(y.item_text, '== ', this.pincode);
                        if (y.item_text == this.pincode) {
                            this.secondary_labs.push(x);
                        }
                    }
                }
                console.log(this.secondary_labs);
                yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var price = 0;
                    var selling_price = 0;
                    var all_test_data = [];
                    var all_test1_data = [];
                    var available_test = [];
                    var not_available_test = [];
                    console.log(this.associated_test);
                    for (let x of this.associated_test) {
                        if (x.branch_id == element.uid) {
                            console.log('available data');
                            all_test_data.push(x);
                            available_test.push(x.itid.test_name);
                            price += x.price;
                            selling_price += x.selling_price;
                        }
                    }
                    for (let x of this.addToBucket) {
                        var is_available = false;
                        for (var y of all_test_data) {
                            if (x == y.individual_test) {
                                is_available = true;
                            }
                        }
                        if (is_available == false) {
                            all_test1_data.push(x);
                        }
                    }
                    var test2data = [];
                    for (let x of this.associated_tests) {
                        for (var y of all_test1_data) {
                            if (x.individual_test == y) {
                                test2data.push(x);
                                not_available_test.push(x.itid.test_name);
                            }
                        }
                    }
                    all_test1_data = test2data;
                    var average_rating = 0;
                    element.test_data = all_test_data;
                    element.test1_data = all_test1_data;
                    element.available_test = available_test;
                    element.not_available_test = not_available_test;
                    element.price = price;
                    element.selling_price = selling_price;
                    var distance = yield this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
                    element.distance = distance;
                    var rating_array = [];
                    var facilities = [];
                    for (let x of this.facilities) {
                        for (let y of element.facility) {
                            if (x.id == y) {
                                facilities.push(x);
                            }
                        }
                    }
                    element.facilities = facilities;
                    for (let x of this.reviews) {
                        if (x.lab_id == element.id) {
                            rating_array.push(x);
                        }
                    }
                    element.total_reviews = 0;
                    if (rating_array.length > 0) {
                        var avgrate = 0;
                        var rating_length = rating_array.length;
                        for (var x of rating_array) {
                            avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                        }
                        average_rating = avgrate / rating_length;
                        element.total_reviews = rating_array.length;
                    }
                    element.average_rating = average_rating;
                }));
                this.secondary_labs.sort(this.compare);
                var newSortedArray = [];
                for (var x of this.secondary_labs) {
                    if (x.test_data.length > 0) {
                        newSortedArray.push(x);
                    }
                }
                this.secondary_labs = newSortedArray;
                console.log(this.secondary_labs);
                console.log(this.newBucketArray);
                console.log(this.addToBucket);
                const circularReplacer = () => {
                    // Creating new WeakSet to keep 
                    // track of previously seen objects
                    const seen = new WeakSet();
                    return (key, value) => {
                        // If type of value is an 
                        // object or value is null
                        if (typeof (value) === "object"
                            && value !== null) {
                            // If it has been seen before
                            if (seen.has(value)) {
                                return;
                            }
                            // Add current value to the set
                            seen.add(value);
                        }
                        // return the value
                        return value;
                    };
                };
                let arr = [];
                for (let x of this.secondary_labs) {
                    arr.push({
                        address: x.address,
                        available_test: x.available_test,
                        cod: x.cod,
                        cover: x.cover,
                        distance: x.distance,
                        price: x.price,
                        selling_price: x.selling_price,
                        total_reviews: x.total_reviews,
                        facilities: x.facilities,
                        id: x.id,
                        lat: x.lat,
                        lng: x.lng,
                        name: x.name,
                        lab_timings: x.lab_timings,
                        not_available_test: x.not_available_test,
                        logo: x.logo,
                        range_price: x.range_price,
                        service_delivery: x.service_delivery,
                        test1_data: x.test1_data,
                        test_data: x.test_data,
                        free_charge: x.free_charge,
                        page_slug: x.page_slug
                    });
                }
                var jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(arr);
                localStorage.setItem('labsdata', jsonString);
                localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(this.newBucketArray));
                localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_10__["stringify"])(this.addToBucket));
                this.router.navigate(['search-labs']);
            })).catch(error => {
                this.util.hide();
                console.log(error);
            });
        });
    }
    compare(a, b) {
        if (a.distance < b.distance) {
            return -1;
        }
        if (a.distance > b.distance) {
            return 1;
        }
        return 0;
    }
    getAssociatedTest() {
        this.associated_test = [];
        for (var i of this.addToBucket) {
            console.log(i);
            for (var x of this.associated_tests) {
                if (x.individual_test == i)
                    this.associated_test.push(x);
                console.log(this.associated_test);
            }
        }
    }
    openQuery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                cssClass: 'supportCss',
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    showAllTests() {
        this.router.navigate(['tests']);
    }
    showAllPackages() {
        this.router.navigate(['health-packages']);
    }
    goToDetail(data) {
        localStorage.setItem('testid', data.id);
        localStorage.setItem('testname', data.test_name);
        this.router.navigate(['test', data.page_slug]);
    }
    viewRisk(data) {
        localStorage.setItem('riskid', data.id);
        this.router.navigate(['risk', data.name]);
    }
    viewHabit(data) {
        localStorage.setItem('habitid', data.id);
        this.router.navigate(['habit', data.name]);
    }
    goToCardiology() {
        this.router.navigate(['cardiology']);
    }
    goToRadiology() {
        this.router.navigate(['radiology']);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map