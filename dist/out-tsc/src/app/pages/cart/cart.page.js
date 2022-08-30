import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { environment } from 'src/environments/environment';
import { AddAddressPage } from '../add-address/add-address.page';
import * as moment from 'moment';
import { ExternalLibraryService } from 'src/app/services/razorpay';
let CartPage = class CartPage {
    constructor(api, util, router, modalController, razorpayService, cd) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.modalController = modalController;
        this.razorpayService = razorpayService;
        this.cd = cd;
        // memberForm: FormGroup;
        // addressForm: FormGroup;
        this.name = '';
        this.phone = '';
        this.dob = '';
        this.members = [];
        this.member = '';
        this.stepOne = true;
        this.stepTwo = false;
        this.stepThree = false;
        this.user_type = "My Self";
        this.heading = ['For Whom?', 'Sample Collection Address, Date and Time'];
        this.selectedMember = [];
        this.address = [];
        this.collection_mode = '';
        this.isMode = true;
        this.selectedAddress = '';
        this.booking_date = '';
        this.booking_time = '';
        this.payment_type = '';
        this.address_text = '';
        this.total = 0;
        this.grand_total = 0;
        this.mrp_price = 0;
        this.discount_on_mrp = 0;
        this.declaration = '';
        this.reports = [];
        this.showModal = false;
        this.url = "https://firebasestorage.googleapis.com/v0/b/way2lab-c6a78.appspot.com/o/logo.png?alt=media&token=355c1220-81ce-4b99-93f3-3a1cca0074cd";
        this.typeList = [
            'My Self',
            'Someone Else',
        ];
        this.getMembers();
        this.getAddress();
        this.razorpayService
            .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
            .subscribe();
        this.min = moment(new Date()).format("DD-MM-YYYY");
        let add7Days = new Date(new Date().setDate(new Date().getDate() + 7)).valueOf();
        this.max = moment(add7Days).format("DD-MM-YYYY");
        // this.memberForm = this.formBuilder.group({
        //   name: ['', [Validators.required]],
        //   dob: ['', [Validators.required]],
        //   gender: ['', [Validators.required]],
        //   age: ['', [Validators.required]]
        // })
        // this.addressForm = this.formBuilder.group({
        //   address: ['', [Validators.required]],
        //   phone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
        //   email: ['', [Validators.required]],
        //   booking_date: ['', [Validators.required]],
        //   booking_time: ['', [Validators.required]]
        // })
        this.pincode = localStorage.getItem('pincode');
        this.cart = JSON.parse(localStorage.getItem('cartdata'));
        console.log(this.cart);
        // this.mrp_price = this.cart.price;
        this.discount_on_mrp = this.cart.price - this.cart.selling_price;
        // this.total = this.mrp_price - this.discount_on_mrp;
        // this.grand_total = this.total;
        this.calculatePrice(1);
    }
    calculatePrice(qty) {
        console.log(qty);
        this.mrp_price = qty * this.cart.price;
        this.discount_on_mrp = qty * (this.cart.price - this.cart.selling_price);
        this.total = this.mrp_price - this.discount_on_mrp;
        this.grand_total = this.total;
    }
    // openCoupon() {
    //   const navData: NavigationExtras = {
    //     queryParams: {
    //       societyId: this.societyId,
    //       society_name: this.society_name,
    //       totalPrice: this.total_price
    //     }
    //   };
    //   console.log(navData)
    //   this.router.navigate(['coupons'], navData);
    // }
    ngOnInit() {
        const uid = localStorage.getItem('uid');
        this.api.getMyProfile(uid).then((data) => {
            console.log('my profile', data);
            if (data) {
                console.log(data);
                this.phone = data.phone;
                this.name = data.name;
                this.email = data.email;
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    getMembers() {
        const uid = localStorage.getItem('uid');
        this.api.getMemberByUId(uid).then((info) => {
            console.log(info);
            this.members = info;
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    getAddress() {
        const uid = localStorage.getItem('uid');
        this.api.getMyAddress(uid).then((data) => {
            if (data && data.length) {
                // this.address = data;
                for (let x of data) {
                    if (this.pincode == x.pincode) {
                        this.address.push(x);
                    }
                }
                console.log(this.address);
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
    }
    selectMember(data, member, index) {
        if (data.detail.checked == true) {
            this.selectedMember.push(member);
            // this.patientCount = this.patientCount + 1;
            this.calculatePrice(this.selectedMember.length);
        }
        else {
            for (let x of this.selectedMember) {
                if (x.id == member.id) {
                    this.selectedMember.splice(index, 1);
                    // this.patientCount = this.patientCount - 1;
                    if (this.selectedMember.length > 0) {
                        console.log('if');
                        this.calculatePrice(this.selectedMember.length);
                    }
                    else {
                        console.log('else');
                    }
                }
            }
        }
    }
    selectAddress(data) {
        console.log(data);
        const uid = localStorage.getItem('uid');
        this.api.getAddressById(uid, data).then((info) => {
            console.log(info);
            this.newaddress = info[0];
            this.address_text = this.newaddress.street + ' ' + this.newaddress.locality + ' ' + this.newaddress.landmark + ' ' + this.newaddress.pincode + ' ' + this.newaddress.city + ' ' + this.newaddress.state;
            console.log(this.address_text);
            localStorage.setItem('boookingaddress', this.address_text);
            console.log();
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    addMember() {
        return __awaiter(this, void 0, void 0, function* () {
            localStorage.setItem('routeFrom', 'add');
            const modal = yield this.modalController.create({
                component: UpdateComponent,
                cssClass: 'update-modal-css',
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.selectedMember = [];
                this.getMembers();
            });
            return yield modal.present();
        });
    }
    addAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: AddAddressPage,
                cssClass: 'address-modal-css',
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.getAddress();
            });
            return yield modal.present();
        });
    }
    radioMode(data) {
        this.collection_mode = data;
        console.log(this.collection_mode);
    }
    selectDec(value) {
        console.log(value);
        if (value == 'Yes') {
            this.declaration = 'Yes';
        }
        else {
            this.declaration = 'No';
        }
    }
    radioChecked(value) {
        this.user_type = value;
    }
    datePickerStart(ev) {
        this.age = this.calculateAge(ev.detail.value);
    }
    calculateAge(birthdate) {
        return moment().diff(birthdate, 'years');
    }
    nextMode() {
        this.isMode = false;
    }
    previousMode() {
        this.stepOne = true;
        this.stepTwo = false;
    }
    nextElse() {
        this.stepOne = true;
    }
    goToStepTwo() {
        this.stepOne = false;
        this.stepTwo = true;
    }
    goToStepThree() {
        this.stepTwo = false;
        this.stepThree = true;
    }
    goBackTwo() {
        this.stepTwo = true;
        this.isMode = true;
    }
    payWithCash() {
        this.util.show('Please wait....');
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const created = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        this.booking_id = id;
        let userId = '/users/' + uid;
        let param = {
            uid: uid,
            userId: userId,
            address: this.selectedAddress,
            createdAt: created,
            booking_id: id.toString(),
            member_id: this.selectedMember,
            booking_date: this.booking_date,
            booking_time: this.booking_time,
            lab_id: this.cart.uid,
            coupon_code: '',
            discount_amount: '',
            gst: 0,
            mrp_price: this.mrp_price,
            discount_on_mrp: this.discount_on_mrp,
            total: this.total,
            grand_total: this.grand_total,
            status: 0,
            test_data: this.cart.test_data,
            collection_mode: this.collection_mode,
            payment_type: 'Cash',
            reports: this.reports,
            covid_declaration: this.declaration,
            isRate: 0
        };
        console.log(this.declaration);
        this.api.addBookings(id.toString(), param).then((userData) => {
            this.sendSMS();
            this.util.hide();
            localStorage.setItem('bookingid', this.booking_id);
            this.router.navigate(['/summary']);
        }).catch(err => {
            if (err) {
                this.util.hide();
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    // async payWithRazorpay(){
    //   const id = Math.floor(100000000 + Math.random() * 900000000);
    //   this.booking_id = id;
    //   const uid = localStorage.getItem('uid');
    //   const date = new Date();
    //   const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    //       let userId = '/users/'+uid;
    //       const param = {
    //           uid:uid,
    //           userId:userId,
    //           address: this.selectedAddress,
    //           createdAt: createdOn,
    //           booking_id: id.toString(),
    //           member_id: this.selectedMember,
    //           booking_date: this.booking_date,
    //           booking_time: this.booking_time,
    //           lab_id: this.cart.uid,
    //           coupon_code: '',
    //           discount_amount: '',
    //           gst: 0,
    //           mrp_price:this.mrp_price,
    //           discount_on_mrp: this.discount_on_mrp,
    //           total: this.total,
    //           grand_total: this.grand_total,
    //           status: 0,
    //           test_data: this.cart.test_data,
    //           collection_mode: this.collection_mode,
    //           payment_type: 'Online',
    //           reports: this.reports,
    //           covid_declaration: this.declaration
    //         }
    //         console.log(param)
    //         var options = {
    //           description:'Booking Id'+id,
    //           image: this.url,
    //           currency: environment.general.code, // your 3 letter currency code
    //           key: environment.razorpay.api_key, // your Key Id from Razorpay dashboard
    //           amount: this.grand_total*100, // Payment amount in smallest denomiation e.g. cents for USD
    //           name: 'Way2Lab',
    //           prefill: {
    //             email: this.email,
    //             contact:this.phone,
    //             name: this.name,
    //           },
    //           theme: {
    //             color: '#2ea2cc'
    //           },
    //           modal: {
    //             ondismiss: function () {
    //               console.log('dismissed')
    //             }
    //           }
    //         };
    //         var successCallback = (payment_id) => {
    //         this.util.show('Please wait....')
    //         console.log('payment_id: ' + payment_id);
    //         this.api.addBookings(id.toString(),param).then(async(data) => {
    //           console.log(data)
    //           this.sendSMS();
    //           const uid = localStorage.getItem('uid');
    //           const date = new Date();
    //           const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    //           const id = Math.floor(100000000 + Math.random() * 900000000);
    //           let params =  {
    //             transactionid: payment_id,
    //             id: id.toString(),
    //             createdAt: createdAt,
    //             amount: this.grand_total,
    //             status: 'SUCCESS',
    //             uid: uid,
    //             order_id: this.booking_id,
    //           }
    //           this.api.addTransaction(id.toString(),params).then(async(data) => {
    //             console.log(data)
    //             this.router.navigate(['/bookings']);
    //            }).catch(err => {
    //             if (err) {
    //               this.util.hide(); 
    //               console.log(err);
    //               this.util.showToast(`${err}`, 'danger', 'bottom');
    //             }
    //           });
    //          }).catch(err => {
    //           if (err) {
    //             this.util.hide(); 
    //             console.log(err);
    //             this.util.showToast(`${err}`, 'danger', 'bottom');
    //           }
    //         });
    //       };
    //       var cancelCallback = (error) => {
    //         console.log(error.description + ' (Error ' + error.code + ')');
    //     };
    //       RazorpayCheckout.open(options, successCallback, cancelCallback);       
    //   }
    sendSMS() {
        let url = 'http://demo.orgmachine.com/way2lab_sms/order_placed.php?mobile=' + this.phone + '&name=' + this.name + '&orderid=' + this.booking_id + '&labname=' + this.cart.name;
        console.log(url);
        this.api.sendSms(url).subscribe((data) => {
            console.log(data);
        }, error => {
            // this.util.hide();
            console.log('err', error);
        });
    }
    payWithRazorpay(payment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.util.show('Please wait....');
            const id = Math.floor(100000000 + Math.random() * 900000000);
            this.booking_id = id;
            const uid = localStorage.getItem('uid');
            const date = new Date();
            const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss A");
            let userId = '/users/' + uid;
            const param = {
                uid: uid,
                userId: userId,
                address: this.selectedAddress,
                createdAt: createdOn,
                booking_id: id.toString(),
                member_id: this.selectedMember,
                booking_date: this.booking_date,
                booking_time: this.booking_time,
                lab_id: this.cart.uid,
                coupon_code: '',
                discount_amount: '',
                gst: 0,
                mrp_price: this.mrp_price,
                discount_on_mrp: this.discount_on_mrp,
                total: this.total,
                grand_total: this.grand_total,
                status: 0,
                test_data: this.cart.test_data,
                collection_mode: this.collection_mode,
                payment_type: 'Online',
                payment_id: payment_id,
                reports: this.reports,
                covid_declaration: this.declaration,
                isRate: 0
            };
            console.log(param);
            console.log('payment_id: ' + payment_id);
            this.api.addBookings(id.toString(), param).then((data) => __awaiter(this, void 0, void 0, function* () {
                console.log(data);
                this.sendSMS();
                const uid = localStorage.getItem('uid');
                const date = new Date();
                const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
                const id = Math.floor(100000000 + Math.random() * 900000000);
                let params = {
                    transactionid: payment_id,
                    id: id.toString(),
                    createdAt: createdAt,
                    amount: this.grand_total,
                    status: 'SUCCESS',
                    uid: uid,
                    order_id: this.booking_id,
                };
                this.api.addTransaction(id.toString(), params).then((data) => __awaiter(this, void 0, void 0, function* () {
                    console.log(data);
                    this.util.hide();
                    localStorage.setItem('bookingid', this.booking_id);
                    this.router.navigate(['/summary']);
                })).catch(err => {
                    if (err) {
                        this.util.hide();
                        console.log(err);
                        this.util.showToast(`${err}`, 'danger', 'bottom');
                    }
                });
            })).catch(err => {
                if (err) {
                    this.util.hide();
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        });
    }
    proceed() {
        this.RAZORPAY_OPTIONS = {
            description: 'Lab Test Booking',
            image: this.url,
            currency: environment.general.code,
            key: environment.razorpay.api_key,
            amount: this.grand_total * 100,
            name: 'Way2Lab',
            prefill: {
                email: this.email,
                contact: this.phone,
                name: this.name,
            },
            theme: {
                color: '#2ea2cc'
            },
            modal: {
                ondismiss: function () {
                    console.log('dismissed');
                }
            }
        };
        console.log(this.RAZORPAY_OPTIONS);
        //this.RAZORPAY_OPTIONS.amount = 100 + '00';
        // binding this object to both success and dismiss handler
        this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);
        // this.showPopup();
        let razorpay = new Razorpay(this.RAZORPAY_OPTIONS);
        razorpay.open();
    }
    razorPaySuccessHandler(response) {
        console.log(response);
        if (response.razorpay_payment_id) {
            this.payWithRazorpay(response.razorpay_payment_id);
        }
        else {
            this.util.showToast("Some error occured !!", 'danger', 'bottom');
        }
        this.razorpayResponse = 'Razorpay Response';
        this.showModal = true;
        this.cd.detectChanges();
        document.getElementById('razorpay-response').style.display = 'block';
    }
};
CartPage = __decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.page.html',
        styleUrls: ['./cart.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        Router,
        ModalController,
        ExternalLibraryService,
        ChangeDetectorRef])
], CartPage);
export { CartPage };
//# sourceMappingURL=cart.page.js.map