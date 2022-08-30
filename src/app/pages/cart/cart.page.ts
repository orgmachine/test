import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { environment } from 'src/environments/environment';
import { AddAddressPage } from '../add-address/add-address.page';
import { InsufficientPage } from '../insufficient/insufficient.page';
import { ProfileModalPage } from 'src/app/pages/profile-modal/profile-modal.page';
import { ExternalLibraryService } from 'src/app/services/razorpay';
import {parse, stringify, toJSON, fromJSON} from 'flatted';
import * as moment from 'moment';
declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage  implements OnInit{
  tab: any;
  // memberForm: FormGroup;
  // addressForm: FormGroup;
  name: any = '';
  phone: any = '';
  dob: any = '';
  gender: any;
  age: any;
  email: any;
  members: any = [];
  member: any = '';
  stepOne: boolean = true;
  stepTwo: any = false;
  stepThree: any = false;
  test_mode: any = false;
  user_type: any = "My Self";
  heading: any = ['For Whom?', 'Sample Collection Address, Date and Time']
  pincode: any;
  state: any;
  city: any;
  selectedMember: any = [];
  address: any = [];
  timing: any = [];
  newaddress: any;
  collection_mode: any = '';
  isMode: boolean = true;
  selectedAddress: any = '';
  booking_date: any = moment().format('YYYY-MM-DD');
  booking_time: any = '';
  payment_type: any = '';
  address_text: any = '';
  total: any = 0;
  grand_total: any = 0;
  mrp_price: any = 0;
  discount_on_mrp: any = 0;
  // patientCount: number = 1;
  maxDate: any;
  minDate = moment(new Date()).format('YYYY-MM-DD')
  declaration: any = '';
  cart: any;
  cart_length:any = 0;
  booking_id: any;
  RAZORPAY_OPTIONS : any;
  response;
  razorpayResponse;
  showModal = false;
  coupons: any;
  coupon_name ="";
  coupon_amount = 0;
  couponCode: any= '';
  couponId: any = '';
  promotion: any = 0;
  cashback_amount: any = 0;
  coupon_type: any = '';
  usedCoupon: any = [];
  balance: any = 0;
  wallet_money: any;
  currency_: any = "₹";
  profile: any;
  deliveryAmount: any = 0;
  used_coupon_count: any = 0;
  used_couponId:any ='';
  booking: any;
  member_details:any;
  url:any = "https://firebasestorage.googleapis.com/v0/b/way2lab-c6a78.appspot.com/o/logo.png?alt=media&token=355c1220-81ce-4b99-93f3-3a1cca0074cd"
  constructor(
    private api: ApisService,
    private util: UtilService,
    private router: Router,
    public modalController: ModalController,
    private razorpayService: ExternalLibraryService,
    private cd:  ChangeDetectorRef,
	public menu: MenuController
  ) {
    
	  this.getMembers();
    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
    let add7Days = new Date(new Date().setDate(new Date().getDate() + 7)).valueOf();
    this.maxDate = moment(add7Days).format("YYYY-MM-DD")
    const uid = sessionStorage.getItem('uid');
    if(uid !== undefined){
      this.api.getMyProfile(uid).then((data) => {
        this.profile = data;
        console.log(this.profile);
        if(this.profile.name == ''){
          console.log(this.profile.name)
          this.openModal();
        }
      }, error => {
        console.log(error);
      }).catch(error => {
        console.log(error);
      });
    }
    this.util.getCouponObservable().subscribe(data => {
      console.log(data);
      if (data) {
        this.coupon_type = data.coupon_type;
        if(this.coupon_type == 'cashback'){
          if(data.type == "₹") {
           
            this.cashback_amount = data.discount;
            this.couponCode = data.code;
            this.couponId = data.id;
            this.cd.detectChanges();
            this.getCoupon(this.couponId);
            localStorage.setItem('coupon', stringify(data));
            } else if(data.type == "%") {
             
              let percentage_discount = data.discount;
              console.log(percentage_discount)
              var percent = (percentage_discount / 100) * this.total;
              console.log(percentage_discount)

              if (percent >= data.upto && data.upto != 0){
                this.cashback_amount = data.upto;
              } else {
              this.cashback_amount = percent;
              }         
              this.couponCode = data.code;
              this.couponId = data.id;
              this.cd.detectChanges();
              this.getCoupon(this.couponId);
              localStorage.setItem('coupon', stringify(data));
            }
        }else{

          if(data.free_home_visit == 1){
            this.promotion = this.deliveryAmount;
            this.couponCode = data.code;
            this.couponId = data.id;
            this.cd.detectChanges();
            this.getCoupon(this.couponId);
            localStorage.setItem('coupon', stringify(data));
          }else{
            if(data.type == "₹") {
            console.log(data.type)
            this.promotion = data.discount;
            this.couponCode = data.code;
            this.couponId = data.id;
            console.log(this.promotion)
            // this.grand_total = this.total - this.promotion;
            console.log(this.grand_total)
            this.cd.detectChanges();
            this.getCoupon(this.couponId);
            localStorage.setItem('coupon', stringify(data));
            } else if(data.type == "%") {
              console.log(data.type)
              let percentage_discount = data.discount;
              console.log(percentage_discount)
              var percent = (percentage_discount / 100) * this.total;
              console.log(percentage_discount)

              if (percent >= data.upto && data.upto != 0){
                this.promotion = data.upto;
              } else {
              this.promotion = percent;
              }         
              this.couponCode = data.code;
              this.couponId = data.id;
              // this.grand_total = this.total - this.promotion;
              this.cd.detectChanges();
              this.getCoupon(this.couponId);
              localStorage.setItem('coupon', stringify(data));
            }
          }
        }
      }
    });
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: ProfileModalPage,
      cssClass: 'profileCss',
      backdropDismiss:false,
    });
    modal.onDidDismiss().then((dataReturned) => {
    });
    return await modal.present();
  }

  remove(index){
    this.cart = parse(localStorage.getItem('cartdata'));
    console.log(this.cart);
    console.log(index);
    if(this.cart.test_data.length > 1){
       this.cart.available_test.splice(index,1);
       this.cart.test_data.splice(index,1);
       localStorage.setItem('cartdata',stringify(this.cart))
       if(this.selectedMember.length == 0){
        this.calculatePrice(1);
       }else{
        this.calculatePrice(this.selectedMember.length);
       }
       
     }else{
      this.util.showToast('You can not remove this test', 'danger', 'bottom');
     }
   console.log(this.cart);
  
  }


  ionViewWillEnter(){
    //this.getAddress();
    this.pincode = localStorage.getItem('pincode');
    this.cart = parse(localStorage.getItem('cartdata'))
    this.cart_length = Object.keys(this.cart).length;
    console.log(this.cart)
    console.log(Object.keys(this.cart).length)
    if(Object.keys(this.cart).length !== 0){
      // this.discount_on_mrp = this.cart.price - this.cart.selling_price;
      if(this.couponCode == ''){
        this.calculatePrice(1);
      }
    this.currency_ = localStorage.getItem("currency_symbol");
    const uid = sessionStorage.getItem('uid');
    this.api.getWallet(uid).then((data) => {
      this.util.hide();
      if(data && data.length != 0) {
      this.wallet_money = data[0]; 
      this.balance =  this.wallet_money.amount;
    }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.hide();
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });

    }
  }

  lab(){
    localStorage.setItem('labid',this.cart.id)
    this.router.navigate(['diagnostic-lab',this.cart.page_slug]);
  }

  add(){
    this.router.navigate(['home']);
  }

 

  coupon(){
    console.log(this.couponId);
    if(this.couponId !== undefined && this.couponId !=''){
    const uid = sessionStorage.getItem('uid');
    console.log(uid)
    const date = new Date();
    const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    this.used_coupon_count = this.used_coupon_count+1;
    let params =  {};
    if(this.used_couponId !='' ){
      
        params =  {
        couponCode: this.couponCode,
        id:this.used_couponId,
        uid: uid,
        couponid: this.couponId,
        used_coupon: this.used_coupon_count,
        createdOn: createdAt
      }
    }else{
      this.used_couponId = Math.floor(100000000 + Math.random() * 900000000);
       params =  {
        couponCode: this.couponCode,
        id: this.used_couponId,
        uid: uid,
        couponid: this.couponId,
        used_coupon: this.used_coupon_count,
        createdOn:createdAt
      }
    }
    
    this.api.addUsedCoupon(this.used_couponId.toString(),params).then((data) => {
      console.log(data)
     }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
   } else {
     console.log('No coupon applied')
   }
  }

  getCoupon(couponid){
    const uid = sessionStorage.getItem('uid');
    console.log(uid,couponid)
    this.api.getUsedCouponById(uid,couponid).then((data) => {
      console.log(data)
      if(data && data.length) {
      this.usedCoupon = data;
      this.used_coupon_count = data[0].used_coupon;
      this.used_couponId = data[0].id;
      console.log('used_coupon_count'+this.used_coupon_count)
     }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }


  openCoupon() {
    localStorage.setItem('labid',this.cart.id)
    this.router.navigate(['coupons']);
  }


  calculatePrice(qty){
    console.log(qty)
    console.log(this.cart.test_data)
    var price =0;
    var selling_price =0;
    var mrp_price =0;
    var discount_on_mrp =0;
    for(let x of this.cart.test_data){

     price += Number(x.price);
     selling_price += Number(x.selling_price);
     discount_on_mrp += Number(x.discount_on_mrp);
    
    }
   
    this.mrp_price = qty*Number(price);
    this.discount_on_mrp = qty*(Number(price) - Number(selling_price));
    
    this.total = qty*Number(selling_price);
   
    // this.coupon_amount = this.coupons.discount;
    this.grand_total = this.total;
  }



  ngOnInit() {
    const uid = sessionStorage.getItem('uid');
    this.api.getMyProfile(uid).then((data) => {
      console.log('my profile', data);
      if (data) {
        console.log(data)
        this.profile = data;
      }
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  getMembers(){
    const uid = sessionStorage.getItem('uid');
    this.api.getMemberByUId(uid).then((info) => {
       console.log(info)
       this.members = info;
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
  getAddress(){
    const uid = sessionStorage.getItem('uid');
    this.api.getMyAddress(uid).then((data) => {
      console.log(data)
      if (data && data.length) {
        // this.address = data;
        for(let x of data){
          if(this.pincode == x.pincode){
            this.address.push(x); 
          }
        }
        console.log(this.address)
      }
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

/*  selectMember(data,member,index){
    console.log('checked',data.detail.checked);
    console.log('index',index);
    if (data.detail.checked == true) {
		member.report_status = 'Pending';
      this.selectedMember.push(member);
      // this.patientCount = this.patientCount + 1;
      this.calculatePrice(this.selectedMember.length);
    } else {
     // this.selectedMember.splice(index,1);
      console.log('length',this.selectedMember.length);
      console.log('MEMBER',this.selectedMember);
      var i = 0;
      for(let x of this.selectedMember){
        if(x.id == member.id){
          this.selectedMember.splice(i,1);
          // this.patientCount = this.patientCount - 1;
          if(this.selectedMember.length > 0){
            console.log('if',this.selectedMember);
            this.calculatePrice(this.selectedMember.length);
          } else {
            console.log('else')
          }
        }
        i++;
      }
    }
  }*/

    selectMember(member){

    console.log('member',member);
     this.selectedMember =[];
     member.report_status = 'Pending';
     this.selectedMember.push(member);
    console.log('selectedMember',this.selectedMember);
  }

  selectAddress(data){
    console.log(data)
    const uid = sessionStorage.getItem('uid');
    this.api.getAddressById(uid,data).then((info) => {
      console.log(info)
      this.newaddress = info[0];
      this.address_text = this.newaddress.street + ' '+ this.newaddress.locality + ' '+ this.newaddress.landmark +' '+ this.newaddress.pincode +' '+ this.newaddress.city +' '+ this.newaddress.state
      console.log(this.address_text);
      localStorage.setItem('boookingaddress',this.address_text)
      console.log()
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
  
  async addMember(){
	  localStorage.setItem('routeFrom','add')
    const modal = await this.modalController.create({
      component: UpdateComponent,
      cssClass: 'update-modal-css',
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.selectedMember = [];
      this.getMembers();
    });
    return await modal.present();
  }

  async addAddress(){
    localStorage.setItem('routeFrom','add')
    const modal = await this.modalController.create({
    component: AddAddressPage,
    cssClass: 'address-modal-css',
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.address=[];
	  this.getAddress();
    });
    return await modal.present();
  }

  radioMode(data){
    this.collection_mode = data;
    console.log(this.collection_mode)
    console.log('cart',this.cart);
    if(this.collection_mode == 'Home Visit'){
      let data= [];
      data = this.cart.range_price;
      
      if(Number(this.cart.selling_price) <= Number(this.cart.free_charge)){
        console.log('selling_price',this.cart.selling_price);
      console.log('free_charge',this.cart.free_charge);
      console.log('data',data);
        data.forEach(element => {
          if (parseFloat(element.from) <= parseFloat(this.cart.distance)  && parseFloat(element.to) >= parseFloat(this.cart.distance) ) {
            console.log('element',element);
            this.deliveryAmount = Number(element.price);
            console.log('charges', this.deliveryAmount);
          }
        });
      }else{
        this.deliveryAmount = 0;
      }
      
    } else {
      this.deliveryAmount = 0;
    }
  }

  typeList = [
    'My Self',
    'Someone Else',
  ]

  selectDec(value){
    console.log(value);
    if(value == 'Yes'){
      this.declaration = 'Yes';
    } else {
      this.declaration = 'No';
    }
  }

  radioChecked(value){    
    this.user_type = value;
  }

  datePickerStart(ev:any){
    this.age = this.calculateAge(ev.detail.value) 
  }

  public calculateAge(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }

  nextMode(){
    this.test_mode = false;
    
    for(let x of this.cart.test_data){
      if(x.service_delivery.includes(this.collection_mode)){
        //this.test_mode = false;
      }else{
        alert(x.itid.test_name+' not possible at home, please make a separate booking for centre visit for this test '+ x.itid.test_name);
          this.test_mode = true;
      }
    }

    if(this.test_mode == false){
       this.test_timing(this.booking_date);
       this.isMode = false;
    }
  }

  test_timing(booking_date){
    console.log('booking_date',booking_date);
     var today = new Date();
     var current = today.getHours()+2;
     console.log('current1',this.cart);
      this.timing =[];
      var radiology = this.cart.test_data[0].itid.isRadiology;
      var cardiology = this.cart.test_data[0].itid.isCardiology;

      if(radiology == 1 || cardiology ==1 ){
        var lab_timing = this.cart.test_data[0].lab_timings;
         console.log('lab_timing',lab_timing);
        for(let lab_time of lab_timing){
          if(lab_time.opening_day == moment(booking_date).format('e')){
             var opening_time = lab_time.opening_time.split(":");
             var closing_time = lab_time.closing_time.split(":");
             var open = Number(opening_time[0]);
             var close = Number(closing_time[0]);
            console.log('open',open);
            console.log('close',close);
            for(let i = open ; i<close; i=i+2){
              let p = i+2;

              if(booking_date == moment().format('YYYY-MM-DD')){
                
                console.log('current',Number(current));
                console.log('i',i);
                if(i >= Number(current)){
                var labTiming = i+':'+opening_time[1]+' - '+p+':'+opening_time[1];
                this.timing.push(labTiming);
               }
              }else{
                var labTiming = i+':'+opening_time[1]+' - '+p+':'+opening_time[1];
                this.timing.push(labTiming);
              }
              
             }
          }
        }
      }else{
         for(let lab_time of this.cart.lab_timings){
          if(lab_time.opening_day == moment(booking_date).format('e')){
             var opening_time = lab_time.opening_time.split(":");
             var closing_time = lab_time.closing_time.split(":");
             var open = Number(opening_time[0]);
             var close = Number(closing_time[0]);
            console.log('open',open);
            console.log('close',close);
            for(let i = open ; i<close; i=i+2){
              let p = i+2;

              if(booking_date == moment().format('YYYY-MM-DD')){
                
                console.log('current',Number(current));
                console.log('i',i);
                if(i >= Number(current)){
                var labTiming = i+':'+opening_time[1]+' - '+p+':'+opening_time[1];
                this.timing.push(labTiming);
               }
              }else{
                var labTiming = i+':'+opening_time[1]+' - '+p+':'+opening_time[1];
                this.timing.push(labTiming);
              }
              
             }
          }
        }
      }
      
      console.log('timing',this.timing);
       
    
  }

  previousMode(){
    this.stepOne = true;
    this.stepTwo = false;
  }

  nextElse(){
    this.stepOne = true;
  }

  goToStepTwo(){
    this.getAddress();
    this.stepOne = false;
    this.stepTwo = true;
  }

  goToStepThree(){
    this.stepTwo = false;
    this.stepThree = true;
  }
  goBackTwo(){
    this.stepTwo = true;
    this.isMode=true;
  }

  async walletPay(){
    this.grand_total = this.total - this.promotion+this.deliveryAmount;
    let required_amount = this.grand_total - this.balance;
    console.log('required_amount',required_amount);
    console.log('grand_total',this.grand_total);
    if (this.balance >= this.grand_total){
      this.payWithWallet()
    } else if (this.balance < this.grand_total) {
      const modal = await this.modalController.create({
       component: InsufficientPage,
       cssClass: 'ins-modal-css',
       componentProps: {
            "wallet_balance": this.balance,
            "required_amount":required_amount
          }
       });
        modal.onDidDismiss().then((dataReturned) => {
          if (dataReturned.data == 'success') {
            this.getWallet();
          }
        });
      return await modal.present();
    }
  }

  getWallet() {
    this.util.show('Please wait....')
    this.currency_ = localStorage.getItem("currency_symbol");
    const uid = sessionStorage.getItem('uid');
    this.api.getWallet(uid).then((data) => {
      this.util.hide();
      if(data && data.length != 0) {
      this.wallet_money = data[0]; 
      this.balance =  this.wallet_money.amount;
      this.payWithWallet();
    }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.hide();
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  addWalletTransaction(booking_id){
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    let param =  {
      booking_id: booking_id,
      id: id.toString(),
      status: 'success',
      createdAt: createdAt,
      amount: this.grand_total,
      uid: uid,
      type: 'Debit'
    }

    this.api.addWalletTransaction(id.toString(),param).then((userData) => {   
     // console.log(data)
       }).catch(err => {
      /*this.util.hide();
      if (err) {
        this.util.hide()
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }*/
    });
  }


  addCashbackTransaction(booking_id){
    if(this.couponId !== undefined && this.couponId !='' && this.coupon_type =='cashback'){
      const uid = sessionStorage.getItem('uid');
      const date = new Date();
      const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
      const id = Math.floor(100000000 + Math.random() * 900000000);
      let param =  {
        booking_id: booking_id,
        id: id.toString(),
        status: 'pending',
        createdAt: createdAt,
        amount: this.cashback_amount,
        uid: uid,
        type: 'Cashback'
      }

      this.api.addWalletTransaction(id.toString(),param).then((userData) => {   
       // console.log(data)
         }).catch(err => {
        /*this.util.hide();
        if (err) {
          this.util.hide()
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }*/
      });
    }
  }

  async payWithWallet(){
    this.util.show('Please wait....')
      const uid = sessionStorage.getItem('uid');
      const date = new Date();
      const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
      let total_amount = this.balance - this.grand_total;
      console.log(total_amount)
       let post = {
        uid:uid,
        updatedAt: updatedAt,
        amount: total_amount,
      }


    await this.api.addMoneyToWallet(uid,post).then(async(data) => {
      const uid = sessionStorage.getItem('uid');
      const date = new Date();
      const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
      const id = Math.floor(100000000 + Math.random() * 900000000);
      const id2 = Math.floor(100000000 + Math.random() * 900000000);
      this.booking_id = id;
      let dateunix = new Date();
      var unixtimestamp = (new Date(dateunix)).getTime();
 
      let param = {
        uid:uid,
        userId:uid,
        address: this.selectedAddress,
        createdAt: created,
        booking_id: id.toString(),
        member_id: this.selectedMember,
        booking_date: this.booking_date,
        booking_time: this.booking_time,
        address_text:this.address_text,
        lab_id: this.cart.id,
        Lvid: this.cart.id,
        coupon_code: this.couponCode,
        discount_amount: this.promotion,
        gst: 0,
        mrp_price:this.mrp_price,
        discount_on_mrp: this.discount_on_mrp,
        total: this.total,
        grand_total: this.grand_total,
        status: 0,
        test_data: this.cart.test_data,
        collection_mode: this.collection_mode,
        payment_type: 'Wallet',
        covid_declaration: this.declaration,
        isRate:0,
        transactionid: '',
        unixtimestamp:unixtimestamp,
        deliveryAmount:this.deliveryAmount
      }


      console.log(param)
      await this.api.addBookings(id.toString(),param).then(async(userData) => {
        localStorage.setItem('cartdata',stringify({}))
        this.addWalletTransaction(id.toString());
        this.sendSMS();
        this.util.hide(); 
        // coupon start 
        
        this.coupon();
        this.addCashbackTransaction(id.toString());
      // coupon end
      localStorage.setItem('bookingid',this.booking_id)
      this.router.navigate(['/summary']);
    }).catch(err => {
      if (err) {
        this.util.hide(); 
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
    }).catch(err => {
      if (err) {
        this.util.hide();
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    })  
  }

  async payWithCash(){
    this.util.show('Please wait....')
        this.grand_total = this.total - this.promotion + this.deliveryAmount;
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const id2 = Math.floor(100000000 + Math.random() * 900000000);
    this.booking_id = id;
    // let userId = '/users/'+uid;
    let dateunix = new Date();
    var unixtimestamp = (new Date(dateunix)).getTime();
    let param = {
      uid:uid,
      userId:uid,
      address: this.selectedAddress,
      createdAt: created,
      booking_id: id.toString(),
      member_id: this.selectedMember,
      booking_date: this.booking_date,
      booking_time: this.booking_time,
      address_text:this.address_text,
      lab_id: this.cart.id,
      Lvid: this.cart.id,
      coupon_code: this.couponCode,
      discount_amount: this.promotion,
      gst: 0,
      mrp_price:this.mrp_price,
      discount_on_mrp: this.discount_on_mrp,
      total: this.total,
      grand_total: this.grand_total,
      status: 0,
      test_data: this.cart.test_data,
      collection_mode: this.collection_mode,
      payment_type: 'Cash',
      covid_declaration: this.declaration,
      deliveryAmount:this.deliveryAmount,
      isRate:0,
      unixtimestamp:unixtimestamp,
      transactionid: ''
    }
    console.log(param)
    await this.api.addBookings(id.toString(),param).then(async(userData) => {
      localStorage.setItem('cartdata',stringify({}))
      this.sendSMS();
      this.util.hide(); 
      // coupon start 
      
       this.coupon();
       this.addCashbackTransaction(id.toString());
      // coupon end





      localStorage.setItem('bookingid',this.booking_id)
      this.router.navigate(['/summary']);
    }).catch(err => {
      if (err) {
        this.util.hide(); 
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  sendSMS() {
    let url = 'https://demo.orgmachine.com/way2lab_sms/order_placed.php?mobile='+this.profile.phone+'&name='+this.profile.name+'&orderid='+this.booking_id+'&labname='+this.cart.name;
    console.log(url)
    this.api.sendSms(url).subscribe((data) => {
      console.log(data)
    }, error => {
        // this.util.hide();
        console.log('err', error);
    });
  }

  async payWithRazorpay(payment_id){
    this.util.show('Please wait....')
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const id2 = Math.floor(100000000 + Math.random() * 900000000);
    this.booking_id = id.toString();
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
      // let userId = '/users/'+uid;
      let dateunix = new Date();
      var unixtimestamp = (new Date(dateunix)).getTime();

      const param = {
        uid:uid,
        userId:uid,
        address: this.selectedAddress,
        createdAt: createdOn,
        booking_id: id.toString(),
        member_id: this.selectedMember,
        booking_date: this.booking_date,
        booking_time: this.booking_time,
        address_text:this.address_text,
        lab_id: this.cart.id,
        Lvid: this.cart.id,
        coupon_code: this.couponCode,
        discount_amount: this.promotion,
        gst: 0,
        mrp_price:this.mrp_price,
        discount_on_mrp: this.discount_on_mrp,
        total: this.total,
        grand_total: this.grand_total,
        status: 0,
        test_data: this.cart.test_data,
        collection_mode: this.collection_mode,
        payment_type: 'Online',
        payment_id: payment_id,
        covid_declaration: this.declaration,
        isRate:0,
        transactionid: payment_id,
        unixtimestamp:unixtimestamp,
        deliveryAmount:this.deliveryAmount
      }

      console.log(param)
      console.log('payment_id: ' + payment_id);
      this.api.addBookings(id.toString(),param).then(async(data) => {
        console.log(data)

        localStorage.setItem('cartdata',stringify({}))
        this.sendSMS();
        this.coupon();
        this.addCashbackTransaction(this.booking_id);
        
        const uid = sessionStorage.getItem('uid');
        const date = new Date();
        const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let params =  {
          transactionid: payment_id,
          id: id.toString(),
          createdAt: createdAt,
          amount: this.grand_total,
          status: 'success',
          uid: uid,
          booking_id: this.booking_id,
          type:'Booking'
        }
        this.api.addTransaction(id.toString(),params).then(async(data) => {
          console.log(data)
          this.util.hide(); 
               



          localStorage.setItem('bookingid',this.booking_id)
          this.router.navigate(['/summary']);
         }).catch(err => {
          if (err) {
            this.util.hide(); 
            console.log(err);
            this.util.showToast(`${err}`, 'danger', 'bottom');
          }
        });
      }).catch(err => {
        if (err) {
          this.util.hide(); 
          console.log(err);
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }
    });
  }


  public proceed() {
        this.grand_total = this.total - this.promotion + this.deliveryAmount;
    this.RAZORPAY_OPTIONS = {
      description: 'Lab Test Booking',
      image: this.url,
      currency: environment.general.code, // your 3 letter currency code
      key: environment.razorpay.api_key, // your Key Id from Razorpay dashboard
      amount: this.grand_total * 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Way2Lab',
      prefill: {
        name: this.profile.name,
        email: this.profile.email,
        contact: this.profile.phone,
      },
      theme: {
        color: '#2ea2cc'
      },
      modal: {
        ondismiss: function() {
          console.log('dismissed')
        }
      }
    };
    console.log(this.RAZORPAY_OPTIONS);
    
    //this.RAZORPAY_OPTIONS.amount = 100 + '00';

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response) {
    console.log(response);
    if(response.razorpay_payment_id)
      {
        this.payWithRazorpay(response.razorpay_payment_id);
       } else {
        this.util.showToast("Some error occured !!", 'danger', 'bottom');
      }
    this.razorpayResponse = 'Razorpay Response';
    this.showModal = true;
    this.cd.detectChanges()
    document.getElementById('razorpay-response').style.display = 'block';
  }



  // sendNotification() {
  //   let title = 'Thanks for shopping with us!'
  //   let msg = 'We received your subscription and will begin processing it soon. Please check your email and message for subscription related details.'
  //   this.api.sendNotification(title,msg,this.token).subscribe((data) => {
  //     console.log(data)
  //   }, error => {
  //       // this.util.hide();
  //       console.log('err', error);
  //   });
  // }
  // sendmail() {
  //   this.api.sendEmail().subscribe((data) => {
  //   console.log(data)
  //   }, error => {
  //       // this.util.hide();
  //       console.log('err', error);
  //   });
  // }
}