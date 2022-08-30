import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { StarRatingModule } from 'ionic5-star-rating';
declare var cordova: any;
@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  booking_id: any;
  detail: any;
  booking_detail: any;
  lab_detail: any;
  price: any = 0;
  lab: any = 0;
  sample: any = 0;
  report: any = 0;
  booking: any = 0;
  remark: any = '';
  rateForm: FormGroup;
  constructor(
    private api: ApisService,
    private util: UtilService,
    private router: Router,
    public alertCtrl:AlertController,
    private adb: AngularFirestore,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
  ) {
      this.rateForm = this.formBuilder.group({
        price: ['', Validators.required],
        lab: ['', Validators.required],
        sample: ['', Validators.required], 
        report: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        booking: ['', Validators.required],
        comment: ['', Validators.required]
    })
      this.booking_id = localStorage.getItem('bookingid')
      console.log(this.booking_id)
      this.getBooking(this.booking_id)
  }

  getBooking(id){
    this.api.getBookingById(id).then(data => {
      this.detail = data[0];
      this.getSecondaryLab(this.detail.lab_id);
    }).catch(error => {
      console.log(error);
    });
  }

  getSecondaryLab(id){
    this.api.getSecondaryLabById(id).then(data => {
      this.lab_detail = data[0];
    }).catch(error => {
      console.log(error);
    });
  }

  logPriceRating(rating){
    this.price = rating;
  }

  logLabRating(rating){
    this.lab = rating;
  }

  logSampleRating(rating){
    this.sample = rating;
  }

  logReportRating(rating){
    this.report = rating;
  }

  logBookingRating(rating){
    this.booking = rating; 
  }

  ngOnInit() {
  }

  submit(){
    this.util.show('Please wait....')
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const param = {
      createdAt: createdAt,
      id: id,       
      booking_id: this.booking_id,
      booking: this.booking_id,
      booking_exp: this.booking,
      collection_process: this.sample,
      price: this.price,
      result_quality: this.report,
      slot_timing: this.lab,
      comment: this.remark,
      lab_id: this.lab_detail.uid,
      lab: this.lab_detail.uid,
      product_id: '',
      user: uid,
      uid: uid,
      status: 0
    };
    console.log(param)
    this.api.addReview(id.toString(),param).then((response) => {
      const param = {
        updatedAt: createdAt,
        isRate:1
      };
      this.api.updateBooking(this.booking_id,param).then((response) => {
        console.log(response); 
        this.util.hide();     
        this.alert();
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

  async alert(){
    let mobile = localStorage.getItem('mobile');
      let alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: '<strong>Thanks for your valuable feedback</strong>',
      mode:'ios',
      backdropDismiss: false,
      buttons: [
      {
        text: 'Ok',
        cssClass: 'login-button',
        handler: () => {
         // this.navCtrl.back();
		 this.router.navigate(['/bookings']);
        }
      }
      ]
    });
    alert.present();
  }
}
