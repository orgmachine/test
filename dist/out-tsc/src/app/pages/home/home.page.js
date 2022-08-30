import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { ModalController, NavController, AlertController, MenuController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { MenuComponent } from 'src/app/components/menu/menu.component';
let HomePage = class HomePage {
    constructor(geolocation, router, api, util, modalController, navCtrl, alertCtrl, menu) {
        this.geolocation = geolocation;
        this.router = router;
        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.banners = [];
        this.isLoaded = false;
        this.row_1_banner = [];
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
        this.popular_tests = [];
        this.popular_packages = [];
        this.newBucketArray = [];
        this.getPrimaryLabs();
        this.getPopularTest();
        this.getPopularPackage();
        this.getFacilities();
        this.getAssociatedTests();
        this.getReviews();
        // this.util.publishCityList('cities');
        this.api.getStates().then(data => {
            this.states = data;
        }).catch(error => {
            console.log(error);
        });
        this.util.subscribeQuery().subscribe(data => {
            this.openQuery();
        });
        this.menu.enable(false);
        this.mobile = localStorage.getItem('mobile');
        this.api.getCities().then(data => {
            this.cities = data;
        }).catch(error => {
            console.log(error);
        });
        this.api.getWebBanners().then(data => {
            for (let x of data) {
                if (x.page_name == 'row_1') {
                    this.row_1_banner.push(x);
                }
                else if (x.page_name == 'row_2') {
                    this.row_2_banner = x;
                }
                else if (x.page_name == 'row_3_col_1') {
                    this.row_3_col_1_banner = x;
                }
                else if (x.page_name == 'row_3_col_2') {
                    this.row_3_col_2_banner = x;
                }
            }
        }).catch(error => {
            console.log(error);
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
    getPopularTest() {
        this.api.getIndividualPopularTest().then(data => {
            this.popular_tests = data;
            console.log(this.popular_tests);
        }).catch(error => {
            console.log(error);
        });
    }
    getPopularPackage() {
        this.api.getMostPopularPackage().then(data => {
            this.popular_packages = data;
            console.log(this.popular_packages);
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
        this.getLocation();
        this.isLogin = localStorage.getItem('loginStatus');
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
        console.log(value);
        if (value == 'test') {
            this.testLoad = false;
        }
        else {
            this.pincodeLoad = false;
        }
    }
    select(data) {
        this.pincode = data.pincode;
        localStorage.setItem('pincode', this.pincode);
        this.pincodeLoad = false;
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
    getLocation() {
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
                }
            }
            //city data
            let current_city = city.short_name;
            let current_state = state.long_name;
            this.getStateId(current_state);
            localStorage.setItem('current_city', current_city);
            console.log('trigger event');
            this.util.publishCity(current_city);
            this.util.subscribeCity().subscribe(data => {
                console.log(data);
                this.getCity(data);
            });
            this.getCity(current_city);
            localStorage.setItem('current_state', current_state);
        });
    }
    getCity(data) {
        this.api.getCityByCityName(data).then((data) => {
            console.log(data);
            if (data && data.length) {
                this.getPincode(data[0].id);
            }
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getPincode(id) {
        this.api.getPincodeByCityId(id).then((data) => {
            console.log(data);
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
    // async searchLabs(){
    //    this.util.show('Please wait....')
    //    this.getAssociatedTest();
    //    await this.api.getSecondaryLabs().then(async(data) => {
    //     // console.log(data);
    //     this.all_labs = data;
    //     let pincode = [];
    //     this.util.hide(); 
    //     for(let x of this.all_labs){
    //       let delivery_pincode = [];
    //       for (let y of x.delivery_pincode){
    //         console.log(y)
    //         if(y.item_text == this.pincode){
    //           console.log('matched')
    //           this.secondary_labs.push(x)
    //           console.log(this.secondary_labs)
    //         }
    //       }
    //     }
    //     for (let x of this.associated_test){
    //       console.log(x)
    //       for( let y of this.secondary_labs){
    //         console.log(x)
    //         if(x.branch_id == y.id){
    //           console.log(x.branch_id +'=='+ y.id)
    //           this.pushSecondaryLabs.push({
    //             lab_data:y,
    //             test_date:x
    //           })
    //           console.log(this.pushSecondaryLabs)
    //         }
    //       }
    //     }
    //     let lat = localStorage.getItem('lat');
    //     let lng = localStorage.getItem('lng');
    //     this.pushSecondaryLabs.forEach(async (element) => {
    //       const distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lab_data.lat, element.lab_data.lng);
    //       console.log('distance', distance);
    //       // Distance
    //       if (distance < 50) {
    //         this.finalLabs.push(element);
    //         console.log(this.finalLabs)
    //       }
    //     });
    //     this.router.navigate(['search-labs']);
    //   }).catch(error => {
    //     this.util.hide(); 
    //     console.log(error);
    //   }); 
    // }
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
                // await this.secondary_labs.forEach( async(element) =>{
                //   // console.log(element.test_data)
                //   let available_test_array = [];
                //   let not_available_test_array = [];
                //   for(let y of this.addToBucket){
                //     console.log(x)
                //     for(let x of element.test_data){
                //       console.log(y)
                //       if( y == x.individual_test){
                //         console.log(y +'=='+ x.individual_test)
                //         available_test_array.push(x.itid.test_name);
                //       }
                //     }
                //     for(let x of element.test1_data){
                //       console.log(y)
                //       if( y == x.individual_test){
                //         console.log(y +'=='+ x.individual_test)
                //         not_available_test_array.push(x.itid.test_name);
                //       }
                //     }
                //   }
                //   element.available_test = available_test_array;
                //   element.not_available_test = not_available_test_array;
                // });
                console.log(this.secondary_labs);
                localStorage.setItem('labsdata', JSON.stringify(this.secondary_labs));
                this.router.navigate(['search-labs']);
                // for (let x of this.associated_test){
                //   console.log(x)
                //   for( let y of this.secondary_labs){
                //     console.log(x)
                //     if(x.branch_id == y.id){
                //       console.log(x.branch_id +'=='+ y.id)
                //       this.pushSecondaryLabs.push({
                //         lab_data:y,
                //         test_date:x
                //       })
                //       console.log(this.pushSecondaryLabs)
                //     }
                //   }
                // }
                // this.pushSecondaryLabs.forEach(async (element) => {
                //   const distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lab_data.lat, element.lab_data.lng);
                //   console.log('distance', distance);
                //   // Distance
                //   if (distance < 50) {
                //     this.finalLabs.push(element);
                //     console.log(this.finalLabs)
                //   }
                // });
                // this.router.navigate(['search-labs']);
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
    // getAssociatedTest(){
    //   for(var i of this.addToBucket){
    //     console.log(i)
    //     this.api.getAssociatedTestById(i).then((info) => {
    //      console.log(info)
    //      if(info && info.length !== 0){
    //        this.associated_test=info;
    //        console.log(this.associated_test)
    //      }
    //     }).catch(err => {
    //       if (err) {
    //         console.log(err);
    //         this.util.showToast(`${err}`, 'danger', 'bottom');
    //       }
    //     });
    //   }
    // }
    openQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: MenuComponent,
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
        this.router.navigate(['packages']);
    }
    goToDetail(id) {
        localStorage.setItem('testid', id);
        this.router.navigate(['test-detail']);
    }
};
HomePage = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    }),
    __metadata("design:paramtypes", [Geolocation,
        Router,
        ApisService,
        UtilService,
        ModalController,
        NavController,
        AlertController,
        MenuController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map