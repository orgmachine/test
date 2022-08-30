import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { UtilService } from 'src/app/services/util.service';
let SearchLabsPage = class SearchLabsPage {
    constructor(route, router, alertCtrl, modalController, api, util) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.api = api;
        this.util = util;
        this.terms = '';
        this.labs = [];
        this.all_test = [];
        this.testLoad = false;
        this.addToBucket = [];
        this.newBucketArray = [];
        this.secondary_labs = [];
        this.associated_test = [];
        this.pushSecondaryLabs = [];
        this.finalLabs = [];
        this.reviews = [];
        this.facilities = [];
        this.associated_tests = [];
        this.primary_lab = [];
        this.all_labs = [];
        this.labs = JSON.parse(localStorage.getItem('labsdata'));
        console.log(this.labs);
        if (this.labs.length == 0) {
            this.getFacilities();
            this.getAssociatedTests();
            this.getReviews();
            this.api.getIndividualTest().then(data => {
                this.all_test = data;
            }).catch(error => {
                console.log(error);
            });
        }
    }
    getAssociatedTests() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.getAssociatedTests().then((data) => __awaiter(this, void 0, void 0, function* () {
                console.log(data);
                this.associated_tests = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getFacilities() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.getFacilities().then((data) => __awaiter(this, void 0, void 0, function* () {
                console.log(data);
                this.facilities = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getReviews() {
        this.api.getReviews().then(data => {
            console.log(data);
            this.reviews = data;
        }).catch(error => {
            console.log(error);
        });
    }
    add(data) {
        this.newBucketArray.push(data.test_name);
        this.addToBucket.push(data.id);
    }
    remove(index) {
        this.newBucketArray.splice(index, 1);
        this.addToBucket.splice(index, 1);
        if (this.addToBucket.length == 0) {
            this.testLoad = false;
        }
    }
    onInput(ev) {
        console.log(ev);
        this.testLoad = true;
    }
    book(data) {
        console.log(data);
        localStorage.setItem('cartdata', JSON.stringify(data));
        this.isLogin = localStorage.getItem('loginStatus');
        if (this.isLogin == 'true') {
            this.router.navigate(['cart']);
        }
        else {
            this.showLoginModal();
            return false;
        }
    }
    showLoginModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: SigninComponent,
                cssClass: 'login-modal-css',
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                if (dataReturned) {
                    this.router.navigate(['cart']);
                }
            });
            return yield modal.present();
        });
    }
    handleAddressChange(ev) {
        console.log(ev);
        const geocoder = new google.maps.Geocoder;
        geocoder.geocode({ address: ev.formatted_address }, (results, status) => {
            console.log(results, status);
            if (status === 'OK' && results && results.length) {
                this.latitude = results[0].geometry.location.lat();
                this.longitude = results[0].geometry.location.lng();
                console.log('----->', this.latitude, this.longitude);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
                return false;
            }
        });
    }
    searchLabs() {
        return __awaiter(this, void 0, void 0, function* () {
            this.util.show('Please wait....');
            let lat = localStorage.getItem('lat');
            let lng = localStorage.getItem('lng');
            yield this.getAssociatedTest();
            yield this.api.getSecondaryLabs().then((data) => __awaiter(this, void 0, void 0, function* () {
                // console.log(data);
                this.all_labs = data;
                let pincode = [];
                this.util.hide();
                for (let x of this.all_labs) {
                    let delivery_pincode = [];
                    for (let y of x.delivery_pincode) {
                        if (y.item_text == this.pincode) {
                            console.log('matched');
                            this.secondary_labs.push(x);
                        }
                    }
                }
                yield this.secondary_labs.forEach((element) => __awaiter(this, void 0, void 0, function* () {
                    // console.log(element);
                    var price = 0;
                    var selling_price = 0;
                    var all_test_data = [];
                    var all_test1_data = [];
                    var available_test = [];
                    var not_available_test = [];
                    for (let x of this.associated_test) {
                        console.log(x);
                        if (x.branch_id == element.uid) {
                            console.log('available data');
                            all_test_data.push(x);
                            available_test.push(x.itid.test_name);
                            price += x.price;
                            selling_price += x.selling_price;
                        }
                        //  else {
                        //   console.log('not available data')
                        //     all_test1_data.push(x);
                        // }
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
                    // console.log((lat +","+ lng+","+ element.lat+","+ element.lng));
                    var distance = yield this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
                    // console.log(distance);
                    element.distance = distance;
                    var rating_array = [];
                    // var average_rating =[];
                    var facilities = [];
                    for (let x of this.facilities) {
                        for (let y of element.facility) {
                            if (x.id != y) {
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
                localStorage.setItem('labsdata', JSON.stringify(this.secondary_labs));
                this.router.navigate(['search-labs']);
            })).catch(error => {
                this.util.hide();
                console.log(error);
            });
        });
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
};
__decorate([
    ViewChild('placesRef', { static: false }),
    __metadata("design:type", GooglePlaceDirective)
], SearchLabsPage.prototype, "placesRef", void 0);
SearchLabsPage = __decorate([
    Component({
        selector: 'app-search-labs',
        templateUrl: './search-labs.page.html',
        styleUrls: ['./search-labs.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        ModalController,
        ApisService,
        UtilService])
], SearchLabsPage);
export { SearchLabsPage };
//# sourceMappingURL=search-labs.page.js.map