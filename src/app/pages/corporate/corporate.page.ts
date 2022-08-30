import { Component,OnInit } from '@angular/core';
import { AlertController,ActionSheetController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.page.html',
  styleUrls: ['./corporate.page.scss'],
})
export class CorporatePage implements OnInit{
  name:any;
  phone:any;
  email:any;
  message:any;
  settings:any;
  cname:any;
  designation:any;
  contact_mobile:any;
  contact_email:any;
  contactForm: FormGroup;
  success: any;
  isVerified: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,  
    private api: ApisService,
    private util: UtilService,
    private camera: Camera,
    public formBuilder: FormBuilder,
    private actionSheetController: ActionSheetController,
    public menu: MenuController
  ) {
    this.menu.enable(false);    
      this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      name: ['', [Validators.required]],cname: ['', [Validators.required]],designation: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      message: ['', [Validators.required]],
    })
  }
  ngOnInit(){
    this.api.getSettings().then(data => {
    this.settings = data[0];
    this.contact_mobile = this.settings.contact_phone;
    this.contact_email = this.settings.contact_email;
    }).catch(error => {
      console.log(error);
    });  
  }


  sendOtp() {
    this.util.show('Please wait....')
      let concatphone = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
      this.phone = concatphone;
      this.api.sendOtp(this.phone).subscribe((data) => {
        this.util.hide(); 
        this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
        this.verifyOtpAlert();
      }, error => {
        this.util.hide(); 
        console.log('err', error);
    });
  }

  async verifyOtpAlert(){
    const alert = await this.alertCtrl.create({
    header: 'Verify Otp',
    cssClass: 'profileCss',
    backdropDismiss: false,
    inputs: [
    {
      name: 'otp',
      type: 'tel',
      placeholder: 'Enter OTP here'
    }
    ],
    buttons: [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'cancel-button',
      handler: () => {
        console.log('Confirm Cancel');
      }
    }, 
    {
      text: 'Verify',
      cssClass: 'submit-button',
      handler: (data) => {
        console.log(data);
        this.util.show('Please wait....')
        let param = {
          otp: data.otp,
          mobile: this.phone 
        }
        this.api.verifyOtp(param).subscribe((data) => {
          this.success = data;
          if(this.success.status == "STATUS_OK") {
          this.util.hide();
          this.isVerified = true;
          } else {
            this.util.hide();
            this.util.showToast(this.success.Message, 'danger', 'bottom');
          }
        }, error => {
          this.util.hide();
          console.log('err', error);
        });
      }
    }
  ]
  });
  alert.present();
  }

  submit(){
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const param = {
      userid: uid,
      createdAt: created,
      id: id.toString(),
	  name:this.name,
	  email:this.email,
	  phone:this.phone,
	  cname:this.cname,
	  designation:this.designation,
	  message:this.message
    };
    this.api.addCorporate(id.toString(),param).then((userData) => {
      this.util.showToast('We have received your message we will get back to you shortly.', 'primary', 'bottom');
      this.router.navigate(['/home']);
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
}