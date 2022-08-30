import { Component } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Device } from '@ionic-native/device/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage {
  public timer = 60;
  intervalVar: any;
  isLogin: boolean = false;
  otp: any;
  phone: any;
  postData: any;
  success: any;
  userData: any;
  isDevice: any;
  uuid: any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
    private api: ApisService,
    private util: UtilService,
    private platform: Platform,
    public menu: MenuController,
    private device: Device
    ) { 
      this.startTimer()
      this.route.queryParams.subscribe(data => { 
      this.phone = data.phone;
      console.log(this.phone);
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

  back(){
   this.router.navigate(['login'])
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
      mobile: this.phone 
    }
    console.log(data)
    this.api.verifyOtp(data).subscribe((data) => {
      console.log(data)
      this.success = data;
      if(this.success.status == "STATUS_OK") {
      this.api.getUser(this.phone).then((data) => {
      console.log(data);
      if (data && data.length){
        this.userData = data[0];
        console.log(this.userData.uid)
        sessionStorage.setItem('uid', this.userData.uid);
        sessionStorage.setItem('cartdata',JSON.stringify({}))
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
        this.util.showToast(this.success.Message, 'primary', 'bottom');
        this.router.navigate(['/home']);
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
    console.log(param)
    this.api.updateProfile(uid,param).then((data) => {
      console.log(data)
     }).catch(err => {
      if (err) {
        console.log(err);
        // this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
  skip(){
    this.menu.enable(false);
    this.router.navigate(['/tabs/tab1']);
  }
}