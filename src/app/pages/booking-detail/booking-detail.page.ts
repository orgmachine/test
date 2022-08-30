import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, ModalController, MenuController} from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['./booking-detail.page.scss'],
})
export class BookingDetailPage implements OnInit {
  haveItems: boolean = false;
  myBookings: any[] = [];
  dummy = Array(50);
  data: any;
  today: any;
  //settings: any;
  start_date: any='';
  end_date: any='';
  members: any;
  maxDate: any = new Date();
  profile: any;
  lab: any;
  tab: any;

  booking_id: any;
  detail: any;
  booking_detail: any;
  lab_detail: any;
  address: any;
  address_text: any;
  cancellation_reason: any;
  reason: any;
  cancellation_remark: any;
  settings:any;
  booking_cancel:any;
  booking_date:any;
  booking_time:any;
  booking_start:any;
  current_time:any= moment().format('HH');
  cancel_status:boolean = false;

  constructor(
    private api: ApisService,
    private util: UtilService,
    private router: Router,
    private adb: AngularFirestore,
    private alertCtrl: AlertController,
    private callNumber: CallNumber,
    public modalController: ModalController,
    public route: ActivatedRoute,
	  public menu: MenuController
  ) {

    this.tab = -1;
     console.log(this.current_time)
  }

  ionViewWillEnter() {
    this.booking_id = localStorage.getItem('bookingid');
    console.log(this.booking_id)
    this.getBooking(this.booking_id);
    
  } 

  getBooking(id){
    this.api.getBookingById(id).then(data => {
      this.detail = data[0];
      this.booking_date =this.detail.booking_date;
      this.booking_time =this.detail.booking_time;
      let text = this.booking_time;
      const myArray = text.split(":");
      this.booking_start = myArray[0];
      this.getSettingDetails();
      console.log(this.detail)
      console.log(this.booking_date)
      for(let x of this.detail.member_id){
        if(x.report_status != 'Pending'){
           for(let y of x.reports){
             for(let test of this.detail.test_data){
                console.log(test.itid.id)
                 console.log(y.report_title)
                if(y.report_title == test.itid.id){
                  console.log(test.itid.test_name)
                  y.test_name = test.itid.test_name;
                }
             }
              
           }
        }

      }
       console.log('test_name',this.detail);
      this.getSecondaryLab(this.detail.lab_id);
      this.getAddress(this.detail.address)
      if(this.detail.status == 3 || this.detail.status == 2){
        this.getReason(this.detail.reason)
      }
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

  getSettingDetails(){
     this.cancel_status = false;
    this.api.getSettings().then(data => {
      this.settings = data[0];
      this.booking_cancel = this.settings.booking_cancel;
      var current_date = moment().format('YYYY-MM-DD');
     
     if(this.booking_date == current_date){
      var time = Number(this.booking_start)-this.current_time;
     
      if(time > this.booking_cancel){
        this.cancel_status = true;
         
       }else{
          this.cancel_status = false;
       }
        
      }else{
         var startDate = moment(current_date, 'YYYY-MM-DD');
         var endDate = moment(this.booking_date, 'YYYY-MM-DD');
         var date_diff = endDate.diff(startDate, 'days')-1;
         var days_hours = date_diff*24;
         var today_time = 24-this.current_time;
         var total_time = days_hours+today_time+Number(this.booking_start);
          if(total_time > this.booking_cancel){
            this.cancel_status = true;
             
          }else{
              this.cancel_status = false;
           }
         
      }
      
    }).catch(error => {
      console.log(error);
    });
  }

  getAddress(id){
    const uid = sessionStorage.getItem('uid');
    this.api.getAddressById(uid,id).then(data => {
      this.address = data[0];
      console.log(this.address)
      this.address_text = this.address.street + ' '+ this.address.locality + ' '+ this.address.landmark +' '+ this.address.pincode +' '+ this.address.city +' '+ this.address.state
    }).catch(error => {
      console.log(error);
    });
  }

  getReason(id){
    this.api.getReasonById(id).then(data => {
      this.reason = data[0];
      console.log(this.reason)
      this.cancellation_reason = this.reason.reason;
      this.cancellation_remark = this.detail.remark;
    }).catch(error => {
      console.log(error);
    });
  }

  getClass(item) {
    if (item == 1) {
      return 'confirmed';
    } else if (item == 0){
      return 'to_be_confirmed';
    } else if (item == 2){
      return 'sample_collected';
    } else if (item == 3){
      return 'partial_report_release';
    } else if (item == 4){
      return 'refund_initiated';
    } else if (item == 5){
      return 'refund_cancelled';
    } else if (item == 6){
      return 'completed';
    } else {
      return 'cancelled';
    }
  }

  ngOnInit(){
    // this.getMyBookings(); 
  }

  showContent(item) {
    return this.tab === item;
  }

  showMilestone(item){
    if(item != this.tab){
    this.tab = item;
    } else {
     this.tab = -1;
    }
  }

  downloadPdf(data) {
    let downloadUrl = data.report_file;
    this.toDataURL(downloadUrl, function (dataUrl) {
      var link = document.createElement('a');
      link.href = dataUrl;
      link.download = data.report_title+'.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
  }

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
          callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  download(url){
  console.log(url);
  window.open(url, "_blank");
}

  downloadImage(data) {
    let str = data.report_file;
    const download_name = data.report_title+'.jpg';
    this.DataURL(str, function (dataUrl) {
    var link = document.createElement('a');
    link.href = dataUrl;
    link.download = download_name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
     })

  }

  DataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
          callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  feedback(id){
    localStorage.setItem('bookingid',id)
    this.router.navigate(['rating'])
  }

  cancel(id){
    localStorage.setItem('bookingid',id)
    this.router.navigate(['/cancel']);
  }
}
