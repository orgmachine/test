import { Component, OnInit, ViewChild } from '@angular/core';
import { login } from 'src/app/interfaces/login';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Device } from '@ionic-native/device/ngx';
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { NavController, Platform, IonSlides,ModalController, MenuController } from '@ionic/angular';
import Swal from 'sweetalert2';
import * as firebase from "firebase";
declare var cordova: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild(IonSlides, {static: true}) slides: IonSlides ;
  login: login = { mobile: ''};
  loginForm: FormGroup;
  submitted = false;
  isLogin: boolean = false;
  verificationid: any;
  splash: any = [];
  otpSent: boolean = false;
  recaptchaVerifier;
  otpconfirmationResult: firebase.auth.ConfirmationResult;
  phoneNumber:string = "";
  confirmationResult: any;
  deviceplt: any;
  uuid: any;
  user_phone: any;
  stepOne: boolean = false;
  public timer = 60;
  intervalVar: any;
  otp: any;
  success: any;
  userData: any;
  isDevice: any;
  constructor(
    private router: Router,
    private platform: Platform,
    private device: Device,
    private api: ApisService,
    private util: UtilService,
    private navCtrl: NavController,
    private translate: TranslateService,
    private oneSignal: OneSignal,
    private firebaseAuthentication: FirebaseAuthentication,
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    public menu: MenuController
  ) {
    this.getSreens();
    this.loginForm = this.formBuilder.group({
       phone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]]
    })
     if(sessionStorage.getItem('loginStatus') == "true"){
      this.menu.enable(false);
      this.router.navigate(['/tabs/tab1']);
      this.api.isSignedIn = true;
    } else if(sessionStorage.getItem('loginStatus') == "false"){
      this.api.isSignedIn = false;
    }
    this.oneSignal.getIds().then((data) => {
      console.log('iddddd==========', data);
      localStorage.setItem('fcm', data.userId);
    });
    platform.ready().then(() => {
      this.deviceplt = this.device.platform;
      if(this.platform.is('android') || this.platform.is('ios')){
          this.uuid = this.device.uuid;
      }else {
          console.log('Your device id is null' , this.uuid = 'browser007bond')
      }
    });
    platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.isDevice = 'android';
        this.uuid = this.device.uuid;
      } else if (this.platform.is('ios')) {
        this.isDevice = 'ios';
        this.uuid = this.device.uuid;
      } else  {
        this.isDevice = 'browser';
      }
    });
  }
  ionViewDidEnter() {
    this.menu.enable(false);
   }
  getSreens(){
    this.api.getOnboarding().then(data=> {
      this.splash=data;
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  ngOnInit() {
  }

  sendOTP() {
    this.util.show('Please wait....')
    this.submitted = true;
      this.isLogin = true;
      let concatphone = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
      this.user_phone = concatphone;
      console.log(concatphone)
      const id = Math.floor(100000000 + Math.random() * 900000000);
      let param = {
        uid: id.toString(),
        createdOn: new Date(),
        phone: concatphone,
        deviceId: this.uuid,
        name: '',
        imagePath: '',
        type: 'user',
        status: 'active',
        fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
      }
    this.api.getUser(concatphone).then((data) => {
      console.log(data)
      if(data.length == 0){
        console.log('user not exist');
      this.api.selfRegistration(id.toString(),param).then((userData) => {
        console.log(this.user_phone)
        this.api.sendOtp(this.user_phone).subscribe((data) => {
          console.log(data)
          this.isLogin = false;
          this.util.hide(); 
          this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
          this.stepOne = true;
          this.startTimer();
        }, error => {
            this.util.hide(); 
            console.log('err', error);
        });
      }).catch(err => {
        if (err) {
          this.util.hide();
          console.log(err);
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }
      }).then(el => this.isLogin = false);
    } else {
      console.log('user exist');
      this.isLogin = false
      this.api.sendOtp(concatphone).subscribe((data) => {
        console.log(data)
        this.otpSent = true;
        this.phoneNumber = concatphone;
        this.util.hide(); 
        this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
        this.stepOne = true;
        this.startTimer();
        }, error => {
            this.util.hide(); 
            console.log('err', error);
        });
    }
    }, error => {
      this.util.hide(); 
      console.log(error);
    })
  }
  back(){
    this.stepOne = false;
  } 

  startTimer(){
    this.intervalVar = setInterval(function(){
      if(this.timer > 0) {
        this.timer-- ;
      }}.bind(this),1000) 
  }
    // this called every time when user changed the code
  onCodeChanged(code: string) {
    console.log(code)
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    console.log(code)
    this.otp = code;
  }

  verifyOtp() {
    this.util.show('Please wait....')
    this.isLogin = true;
    let data = {
      otp:this.otp,
      mobile: this.user_phone 
    }
    console.log(data)
    this.api.verifyOtp(data).subscribe((data) => {
      console.log(data)
      this.success = data;
      if(this.success.status == "STATUS_OK") {
      this.api.getUser(this.user_phone).then((data) => {
      console.log(data);
      if (data && data.length){
        this.userData = data[0];
        console.log(this.userData.uid)
        sessionStorage.setItem('uid', this.userData.uid);
        localStorage.setItem('help', this.userData.uid);
        this.updateUserDevice();
        localStorage.setItem('mobile', this.userData.phone);
        sessionStorage.setItem('loginStatus', "true");
        this.isLogin = false;
        this.api.isSignedIn=true;
        localStorage.setItem('selectedLanguage', 'en');
        this.util.publishLoggedIn('LoggedIn');
        this.util.publishLoggedInStatus('true');
        this.menu.enable(false);
        this.util.hide();
        this.util.publishProfile(true);
        this.util.showToast(this.success.Message, 'primary', 'bottom');
        this.close('true');
        // localStorage.setItem("previous-request", "true");
        // localStorage.setItem("previous-request-page", "/checkout");
        // this.router.navigate(['/home']);
      }
      else { 
        this.util.hide();
        this.util.showToast('Something went wrong. Please try again later!', 'danger', 'bottom');
      }
    }, error => {
      this.util.hide();
      console.log(error);
    })
    } else {
      this.util.hide();
      this.util.showToast(this.success.Message, 'danger', 'bottom');
    }
    }, error => {
      this.util.hide();
      console.log('err', error);
    });
  }
  async close(data) {
    await this.modalController.dismiss(data);
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  updateUserDevice(){
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    let param =  {
      modifiedOn: modifiedOn,
      isDevice: this.isDevice,
      deviceId: this.uuid,
      fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
    }
    this.api.updateProfile(uid,param).then((data) => {
      console.log(data)
     }).catch(err => {
      if (err) {
        console.log(err);
        // this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  resend() {
    this.util.show('Please wait....')
    this.timer = 60;
    this.startTimer();
      this.api.sendOtp(this.user_phone).subscribe((data) => {
      this.util.hide(); 
      this.util.showToast('OTP has been sent successfully', 'primary', 'bottom'); 
    }, error => {
        this.util.hide(); 
        console.log('err', error);
    });
  }

  skip(){
    this.router.navigate(['/home']);
  }
}
