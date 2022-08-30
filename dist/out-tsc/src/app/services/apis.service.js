var ApisService_1;
import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class AuthInfo {
    constructor($uid) {
        this.$uid = $uid;
    }
    isLoggedIn() {
        return !!this.$uid;
    }
}
let ApisService = ApisService_1 = class ApisService {
    constructor(fireAuth, adb, http) {
        this.fireAuth = fireAuth;
        this.adb = adb;
        this.http = http;
        this.isSignedIn = false;
        this.db = firebase.firestore();
        this.authInfo$ = new BehaviorSubject(ApisService_1.UNKNOWN_USER);
    }
    checkAuth() {
        return new Promise((resolve, reject) => {
            this.fireAuth.auth.onAuthStateChanged(user => {
                console.log(user);
                if (user) {
                    localStorage.setItem('uid', user.uid);
                    resolve(user);
                }
                else {
                    this.logout();
                    const lng = localStorage.getItem('language');
                    const selectedCity = localStorage.getItem('selectedCity');
                    localStorage.clear();
                    localStorage.setItem('language', lng);
                    localStorage.setItem('selectedCity', selectedCity);
                    resolve(false);
                }
            });
        });
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.fireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(res => {
                if (res.user) {
                    this.db.collection('users').doc(res.user.uid).update({
                        fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
                    });
                    this.authInfo$.next(new AuthInfo(res.user.uid));
                    resolve(res.user);
                }
            })
                .catch(err => {
                this.authInfo$.next(ApisService_1.UNKNOWN_USER);
                reject(`login failed ${err}`);
            });
        });
    }
    getOnboarding() {
        return new Promise((resolve, reject) => {
            this.adb.collection('splash').get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getCities() {
        return new Promise((resolve, reject) => {
            this.adb.collection('cities', ref => ref.where('status', '==', 1)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getPincodeById(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('pincodes', ref => ref.where('pincode', '==', id)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getCityByPincodeId(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('cities', ref => ref.where('status', '==', 1).where('id', '==', id)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getPincodeByCityId(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('pincodes', ref => ref.where('status', '==', 1).where('cityid', '==', id)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getCityByCityName(name) {
        return new Promise((resolve, reject) => {
            this.adb.collection('cities', ref => ref.where('status', '==', 1).where('city', '==', name)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getStateByCityId(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('states', ref => ref.where('status', '==', 1).where('id', '==', id)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getAboutUs() {
        return new Promise((resolve, reject) => {
            this.adb.collection('aboutus').get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getTeamMember() {
        return new Promise((resolve, reject) => {
            this.adb.collection('team').get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getCitiesByStateId(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('cities', ref => ref.where('status', '==', 1).where('state', '==', id)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getStates() {
        return new Promise((resolve, reject) => {
            this.adb.collection('states', ref => ref.where('status', '==', 1)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getClients() {
        return new Promise((resolve, reject) => {
            this.adb.collection('cities', ref => ref.where('status', '==', 1)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getSocieties() {
        return new Promise((resolve, reject) => {
            this.adb.collection('society').get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    selfRegistration(id, param) {
        console.log(param);
        return new Promise((resolve, reject) => {
            this.db.collection('users').doc(id).set(param).then((data) => {
                resolve(data);
            })
                .catch(err => {
                this.authInfo$.next(ApisService_1.UNKNOWN_USER);
                reject(`login failed ${err}`);
            });
        });
    }
    register(mobile, email, password, uid) {
        console.log(mobile, email, password, uid);
        return new Promise((resolve, reject) => {
            this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                if (res.user) {
                    this.db.collection('users').doc(res.user.uid).set({
                        uid: res.user.uid,
                        email: email,
                        createdOn: new Date(),
                        phone: mobile,
                        deviceId: uid,
                        imagePath: '',
                        type: 'user',
                        status: 'active',
                        fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
                    });
                    this.authInfo$.next(new AuthInfo(res.user.uid));
                    resolve(res.user);
                }
            })
                .catch(err => {
                this.authInfo$.next(ApisService_1.UNKNOWN_USER);
                reject(`login failed ${err}`);
            });
        });
    }
    resetPassword(email) {
        return new Promise((resolve, reject) => {
            this.fireAuth.auth.sendPasswordResetEmail(email)
                .then(res => {
                resolve(res);
            })
                .catch(err => {
                reject(`reset failed ${err}`);
            });
        });
    }
    logout() {
        this.authInfo$.next(ApisService_1.UNKNOWN_USER);
        // this.db.collection('users').doc(localStorage.getItem('uid')).update({ "fcm_token": firebase.firestore.FieldValue.delete() })
        return this.fireAuth.auth.signOut();
    }
    getUser(phone) {
        return new Promise((resolve, reject) => {
            this.adb.collection('users', ref => ref.where('phone', '==', phone)).get().subscribe((users) => {
                let data = users.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getMyProfile(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('users').doc(id).get().subscribe((users) => {
                resolve(users.data());
            }, error => {
                reject(error);
            });
        });
    }
    addPrescription(id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('upload_prescription').doc(id).set(param).then((data) => {
                resolve(data);
            }, error => {
                reject(error);
            }).catch(error => {
                reject(error);
            });
        });
    }
    addMember(id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('members').doc(id).set(param, { merge: true }).then((data) => {
                resolve(data);
            }, error => {
                reject(error);
            }).catch(error => {
                reject(error);
            });
        });
    }
    // satya code
    getReviews() {
        return new Promise((resolve, reject) => {
            this.adb.collection('review', ref => ref.where('status', '==', 1)).get().subscribe((venue) => {
                // resolve(venue.data());
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getAssociatedTests() {
        return new Promise((resolve, reject) => {
            this.adb.collection('associated_tests').get().subscribe((venue) => {
                // resolve(venue.data());
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    if (item.itid) {
                        item.itid.get().then(function (doc) {
                            item.itid = doc.data();
                        });
                    }
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getFacilities() {
        return new Promise((resolve, reject) => {
            this.adb.collection('facilities').get().subscribe((venue) => {
                // resolve(venue.data());
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getIndividualPopularTest() {
        return new Promise((resolve, reject) => {
            this.adb.collection('individual_tests', ref => ref.where('status', '==', 1).where('health_package', '==', 0).where('isPopular', '==', 1)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getMostPopularPackage() {
        return new Promise((resolve, reject) => {
            this.adb.collection('individual_tests', ref => ref.where('status', '==', 1).where('health_package', '==', 1).where('isPopular', '==', 1)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getAllIndividualTest() {
        return new Promise((resolve, reject) => {
            this.adb.collection('individual_tests', ref => ref.where('health_package', '==', 0).where('status', '==', 1)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getAllHealthPackages() {
        return new Promise((resolve, reject) => {
            this.adb.collection('individual_tests', ref => ref.where('health_package', '==', 1).where('status', '==', 1)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getMemberByUId(uid) {
        return new Promise((resolve, reject) => {
            this.adb.collection('members', ref => ref.where('uid', '==', uid)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    deleteMember(uid, id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('members').doc(id).delete().then((data) => {
                resolve(data);
            }, error => {
                reject(error);
            }).catch(error => {
                reject(error);
            });
        });
    }
    getIndividualTestById(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('individual_tests', ref => ref.where('id', '==', id)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getGenderRecomendationById(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('recommended_for', ref => ref.where('id', '==', id)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getAgeRecomendationById(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('age_groups', ref => ref.where('id', '==', id)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getSecondaryLabById(uid) {
        return new Promise((resolve, reject) => {
            this.adb.collection('venue', ref => ref.where('uid', '==', uid).where('type', '==', 'secondary')).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getPrimaryLab() {
        return new Promise((resolve, reject) => {
            this.adb.collection('venue', ref => ref.where('status', '==', 1).where('type', '==', 'primary')).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getMemberById(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('members', ref => ref.where('id', '==', id)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getIndividualTest() {
        return new Promise((resolve, reject) => {
            this.adb.collection('individual_tests', ref => ref.where('status', '==', 1)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getAssociatedTestById(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('associated_tests', ref => ref.where('individual_test', '==', id)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getSecondaryLabs() {
        return new Promise((resolve, reject) => {
            this.adb.collection('venue', ref => ref.where('type', '==', 'secondary')).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getOffers() {
        return new Promise((resolve, reject) => {
            this.adb.collection('offers').get().subscribe((offer) => {
                let data = offer.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getHealthHabbits() {
        return new Promise((resolve, reject) => {
            this.adb.collection('habbits', ref => ref.where('status', '==', 1)).get().subscribe((habbits) => {
                let data = habbits.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getHealthRisk() {
        return new Promise((resolve, reject) => {
            this.adb.collection('health_risks', ref => ref.where('status', '==', 1)).get().subscribe((risks) => {
                let data = risks.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getLabReports() {
        return new Promise((resolve, reject) => {
            this.adb.collection('labreports').get().subscribe((report) => {
                let data = report.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getVenueCategories(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('defaultcategories', ref => ref.orderBy('createdAt')).get().subscribe((categories) => {
                var data = categories.docs.map(element => {
                    var item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getSettings() {
        return new Promise((resolve, reject) => {
            this.adb.collection('settings').get().subscribe((setting) => {
                let data = setting.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    addTransaction(id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('transactions').doc(id).set(param).then((data) => {
                console.log(data);
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getTransaction(uid, start_date, end_date) {
        return new Promise((resolve, reject) => {
            this.adb.collection('transactions', ref => ref.where('uid', '==', uid).where('createdAt', '>', start_date).where('createdAt', '<', end_date).orderBy('createdAt', 'desc')).get().subscribe((transactions) => {
                let data = transactions.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getMyTransaction(uid) {
        return new Promise((resolve, reject) => {
            this.adb.collection('transactions', ref => ref.where('uid', '==', uid).orderBy('createdAt', 'desc')).get().subscribe((transactions) => {
                let data = transactions.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    addNewAddress(uid, id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('address').doc(uid).collection('all').doc(id).set(param).then((data) => {
                resolve(data);
            }, error => {
                reject(error);
            }).catch(error => {
                reject(error);
            });
        });
    }
    updateAddress(uid, id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('address').doc(uid).collection('all').doc(id).update(param).then((data) => {
                resolve(data);
            }, error => {
                reject(error);
            }).catch(error => {
                reject(error);
            });
        });
    }
    getMyAddress(uid) {
        return new Promise((resolve, reject) => {
            this.db.collection('address').doc(uid).collection('all').get().then((data) => {
                var users = data.docs.map(doc => {
                    var item = doc.data();
                    item.id = doc.id;
                    return item;
                });
                resolve(users);
            }, error => {
                reject(error);
            });
        });
    }
    deleteAddress(uid, id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('address').doc(uid).collection('all').doc(id).delete().then((data) => {
                resolve(data);
            }, error => {
                reject(error);
            }).catch(error => {
                reject(error);
            });
        });
    }
    getBookingsByAddressId(uid, id) {
        console.log(uid, id);
        return new Promise((resolve, reject) => {
            this.adb.collection('orders', ref => ref.where('uid', '==', uid).where('address', '==', id)).get().subscribe((coupons) => {
                let data = coupons.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getAddressById(uid, id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('address').doc(uid).collection('all', ref => ref.where('id', '==', id)).get().subscribe((venue) => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getMyBookings(id, start_date, end_date) {
        return new Promise((resolve, reject) => {
            this.adb.collection('booking', ref => ref.where('uid', '==', id).where('createdAt', '>', start_date).where('createdOn', '<', end_date).orderBy('createdOn', 'desc')).get().subscribe((venue) => __awaiter(this, void 0, void 0, function* () {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }), error => {
                reject(error);
            });
        });
    }
    getBookings(id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('booking', ref => ref.where('uid', '==', id).orderBy('createdAt', 'desc')).get().subscribe((venue) => __awaiter(this, void 0, void 0, function* () {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }), error => {
                reject(error);
            });
        });
    }
    getBookingById(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            this.adb.collection('booking', ref => ref.where('booking_id', '==', id)).get().subscribe((order) => __awaiter(this, void 0, void 0, function* () {
                let data = order.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }), error => {
                reject(error);
            });
        }));
    }
    updateBooking(id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('booking').doc(id).update(param).then((data) => {
                resolve(data);
            }, error => {
                reject(error);
            }).catch(error => {
                reject(error);
            });
        });
    }
    addReview(id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('review').doc(id).set(param).then((data) => {
                console.log(data);
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    remarks() {
        return new Promise((resolve, reject) => {
            this.adb.collection('return_reason').get().subscribe((list) => {
                let data = list.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                console.log(data);
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getMySubscriptions(id, start_date, end_date) {
        return new Promise((resolve, reject) => {
            this.adb.collection('subscriptions', ref => ref.where('userId', '==', id).where('createdOn', '>', start_date).where('createdOn', '<', end_date).orderBy('createdOn', 'desc')).get().subscribe((venue) => __awaiter(this, void 0, void 0, function* () {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }), error => {
                reject(error);
            });
        });
    }
    updateProfile(uid, param) {
        return new Promise((resolve, reject) => {
            this.db.collection('users').doc(uid).update(param).then((data) => {
                resolve(data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    getWebBanners() {
        return new Promise((resolve, reject) => {
            this.adb.collection('mobilebanners').get().subscribe((venue) => {
                // resolve(venue.data());
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getNotifications(uid) {
        return new Promise((resolve, reject) => {
            this.adb.collection('notifications', ref => ref.where('uid', '==', uid)).get().subscribe((notifications) => {
                let data = notifications.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getSupport(uid) {
        return new Promise((resolve, reject) => {
            this.adb.collection('support', ref => ref.where('userid', '==', uid)).get().subscribe((support) => {
                let data = support.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    addBookings(id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('booking').doc(id).set(param).then((data) => {
                console.log(data);
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    addSupport(id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('support').doc(id).set(param).then((data) => {
                console.log(data);
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    addQuery(id, param) {
        return new Promise((resolve, reject) => {
            this.adb.collection('queries').doc(id).set(param).then((data) => {
                console.log(data);
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    sendNotification(title, msg, id) {
        const body = {
            app_id: environment.onesignal.appId,
            include_player_ids: [id],
            headings: { en: title },
            contents: { en: msg },
            // big_picture: 'https://firebasestorage.googleapis.com/v0/b/avagro-8a44d.appspot.com/o/order.gif?alt=media&token=5f1ae8c9-2ea1-456e-8ba3-a185a4054900'
            // data: { task: msg },
        };
        const header = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', `Basic ${environment.onesignal.restKey}`)
        };
        console.log(header);
        return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
    }
    sendSupportNotification(title, msg, id) {
        const body = {
            app_id: environment.onesignal.appId,
            include_player_ids: [id],
            headings: { en: title },
            contents: { en: msg },
            // data: { task: msg },
        };
        const header = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', `Basic ${environment.onesignal.restKey}`)
        };
        console.log(header);
        return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
    }
    sendWalletNotification(title, msg, id) {
        const body = {
            app_id: environment.onesignal.appId,
            include_player_ids: [id],
            headings: { en: title },
            contents: { en: msg },
            // data: { task: msg },
        };
        const header = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', `Basic ${environment.onesignal.restKey}`)
        };
        console.log(header);
        return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
    }
    sendEmail() {
        const body = {
            email: 'saifk210@gmail.com',
            name: 'Mohd Saif Khan',
        };
        console.log(body);
        const header = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post('https://demo.orgmachine.com/avagro_sms/phpmailer/send.php', body, header);
    }
    sendSms(url) {
        return this.http.post(url, '');
    }
    sendOtp(phone) {
        let url = 'https://demo.orgmachine.com/way2lab_sms/otp.php?mobile=' + phone;
        return this.http.post(url, '');
    }
    verifyOtp(data) {
        let url = 'https://demo.orgmachine.com/way2lab_sms/verify_otp.php';
        const header = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(url, data, header);
    }
    JSON_to_URLEncoded(element, key, list) {
        let new_list = list || [];
        if (typeof element == "object") {
            for (let idx in element) {
                this.JSON_to_URLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, new_list);
            }
        }
        else {
            new_list.push(key + "=" + encodeURIComponent(element));
        }
        return new_list.join("&");
    }
};
ApisService.UNKNOWN_USER = new AuthInfo(null);
ApisService = ApisService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AngularFireAuth,
        AngularFirestore,
        HttpClient])
], ApisService);
export { ApisService };
//# sourceMappingURL=apis.service.js.map