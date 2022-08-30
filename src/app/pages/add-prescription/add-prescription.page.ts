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
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.page.html',
  styleUrls: ['./add-prescription.page.scss'],
})
export class AddPrescriptionPage implements OnInit{
  user_name:any = '';
  attachments: any = [];
  user_mobile: any = '';
  isAttach: boolean=false;
  showInput: boolean = true;
  token: any;
  image: string;
  file_extension: any;
  base64textString: any;
  prescriptionForm: FormGroup;
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
	  //this.menu.enable(false);		
    this.prescriptionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    })
  }
  ngOnInit() {
    let loginStatus = sessionStorage.getItem('loginStatus');
    if(loginStatus == 'true') {
      const uid = sessionStorage.getItem('uid');
      this.api.getMyProfile(uid).then((info) => {
          this.user_name=info.name;
          this.user_mobile=info.phone;
          this.token = info.fcm_token;
      }).catch(err => {
        if (err) {
          console.log(err);
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }
      }); 
    } 
  }
    
  handleFileSelect(evt){
    //this.util.show();
    var files = evt.target.files;
    var file = files[0];
    let fileName = file.name;
    const lastDot = fileName.lastIndexOf('.');

    // const file_name = fileName.substring(0, lastDot);
    const ext = fileName.substring(lastDot + 1);
    this.file_extension = ext;
      if (files && file) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);    
      const base64Image = 'data:image/jpeg;base64,' + this.base64textString;
      this.image = base64Image;    
      const id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
      firebase.storage().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg')
      .putString(base64Image, 'data_url').then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
           //this.util.hide();
            console.log('url uploaded', url);
            const uid = sessionStorage.getItem('uid');
            const date = new Date();
            const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
            const id = Math.floor(100000000 + Math.random() * 900000000);
            this.isAttach = true;
            this.attachments.push(url);
          });
        }, error => {
          this.util.hide();
          console.log(error);
      }).catch((error) => {
        console.log(error);
        this.util.hide();
        this.util.errorToast(this.util.translate('Something went wrong'));
      });
  }


  sendOtp() {
    this.util.show('Please wait....')
      let concatphone = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
      this.user_mobile = concatphone;
      this.api.sendOtp(this.user_mobile).subscribe((data) => {
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
          mobile: this.user_mobile 
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

  addPrescription(){
    this.util.show('Please wait....')
    const date = new Date();
    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const param = {
      name: this.user_name,
      phone: this.user_mobile,
      remarks: '',
      createdAt: created,
      id: id.toString(),
      upload_prescription: this.attachments, 
      status: 0,
    };
	 console.log(param);
    this.api.addPrescription(id.toString(),param).then((userData) => {
	this.util.showToast('We have received your prescription request we will get back to you shortly.', 'primary', 'bottom');
      this.util.hide();
      this.router.navigate(['/home']);
    }).catch(err => {
      if (err) {
        this.util.hide();
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
  removeImageAtIndex (index) {
    this.attachments.splice(index,1)
    if(this.attachments.length == 0){
      this.isAttach = false;
    }
  }
}