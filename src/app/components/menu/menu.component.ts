import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  supportForm: FormGroup;
  cities: any = [];
  phone: any;
  name: any;
  city: any;
  success: any;
  constructor(
    public formBuilder: FormBuilder,
    private api: ApisService,
    private util: UtilService,
    private modalController: ModalController,
    public alertCtrl: AlertController
  ) {
    console.log(localStorage.getItem('current_state'));
    this.supportForm = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      name: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })
  }

  ngOnInit() {
   /*  let stateid = localStorage.getItem('state_id')
    this.api.getCitiesByStateId(stateid).then(data => {
      console.log(data);
    this.cities = data;
    }).catch(error => {
      console.log(error);
    }); */
  }

  async close() {
    await this.modalController.dismiss();
  }

  sendOTP() {
    this.util.show('Please wait....')
    let concatphone = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
    this.phone = concatphone;
    this.api.sendOtp(this.phone).subscribe((data) => {
      console.log(data)
      this.util.hide(); 
      this.showAlert();
      this.util.showToast('OTP has been sent successfully', 'primary', 'top');
    }, error => {
        this.util.hide(); 
        console.log('err', error);
    });
  }

  async showAlert(){
      const alert = await this.alertCtrl.create({
      header: 'Enter Your OTP',
      backdropDismiss: true, 
      mode: 'md',
      inputs: [
        {
          name: 'otp',
          placeholder: 'Please enter your otp here',
          type: 'number',
        }
      ],
      buttons: [
        {
          text: 'Verify',
          handler: (data) => {
            console.log(data.otp)
            this.verifyOtp(data.otp);
          }
        }
      ]
    });
    await alert.present();
  }

  verifyOtp(otp) {
    let data = {
      otp: otp,
      mobile: this.phone 
    }
    console.log(data)
    this.api.verifyOtp(data).subscribe((data) => {
      console.log(data)
      this.success = data;
      if(this.success.status == "STATUS_OK") {
        this.submit();
        this.util.showToast(this.success.Message, 'primary', 'top');
    } else {
      this.util.hide();
      this.util.showToast(this.success.Message, 'danger', 'bottom');
    }
    }, error => {
      this.util.hide();
      console.log('err', error);
    });
  }


  submit(){
    this.util.show('Please wait....')
    const date = new Date();
    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
     const param = {
        createdAt: created,
        id: id.toString(),
        phone: this.phone, 
        name: this.name,
        city: this.city,
        remark: '',
        status: 0,
      };
      this.api.addQuery(id.toString(),param).then((userData) => {
        this.util.hide();
        this.close();
        this.sendSms();
        this.util.showToast('We have recived your call request. We will repsond within 2 hour', 'primary', 'top');
      }).catch(err => {
        if (err) {
        this.util.hide();
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  sendSms() {
    let url = 'https://demo.orgmachine.com/way2lab_sms/callback.php?mobile='+this.phone+'&name='+this.name;
    this.api.sendSms(url).subscribe((data) => {
    }, error => {
        console.log('err', error);
    });
  }
}
