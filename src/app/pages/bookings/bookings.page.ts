import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, ModalController, MenuController} from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import * as moment from 'moment';
// import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  haveItems: boolean = false;
  myBookings: any[] = [];
  dummy = Array(50);
  data: any;
  today: any;
  settings: any;
  start_date: any='';
  end_date: any='';
  members: any;
  maxDate: any = new Date();
  profile: any;
  lab: any;
  tab: any;
  constructor(
    private api: ApisService,
    private util: UtilService,
    private router: Router,
    private adb: AngularFirestore,
    private alertCtrl: AlertController,
    private callNumber: CallNumber,
    public modalController: ModalController,
    public route: ActivatedRoute,
   // private nativeHTTP: HTTP, private file: File,
	  public menu: MenuController
  ) {
    const date = new Date();
    this.today = moment(date).format("DD-MM-YYYY")
    const uid = sessionStorage.getItem('uid');
    console.log(uid)
    this.api.getMyProfile(uid).then((data) => {
      this.profile = data;
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

 download(url){
  console.log(url);
  window.open(url, "_blank");
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

  async ionViewWillEnter() {
    this.util.show('Please wait....')
    let uid = sessionStorage.getItem('uid');
    console.log(uid)
    await this.api.getBookings(uid).then(async(data: any) => {
      console.log(data)
      this.util.hide();
      if (data && data.length) {
        this.myBookings = data;
      }
    }, error => {
      this.util.hide();
      console.log(error);
    }).catch(error => {
      this.util.hide();
      console.log(error);
    });
  } 



  downloadInvoice(downloadLink) {
    let str = downloadLink.invoice_url;
    const download_name = 'invoice'+downloadLink.booking_id+'.pdf';
   // console.log(download_name);
    this.toPdfURL(str, function (dataUrl) {
    var link = document.createElement('a');
    link.href = dataUrl;
    link.download = download_name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
     })

  }

  toPdfURL(url, callback) {
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



  async submit() {
    let uid = sessionStorage.getItem('uid');
    if (this.start_date == ''){
      this.util.showToast('Please select start date', 'danger', 'bottom');
    } 
    if (this.end_date == ''){
      this.util.showToast('Please select end date', 'danger', 'bottom');
    }  
    if (this.start_date > this.end_date){
      this.util.showToast('Start date can not be greater than end date', 'danger', 'bottom');
    }
    this.util.show('Please wait....')
    this.myBookings = [];
    this.api.getMyBookings(uid,this.start_date,this.end_date).then((data: any) => {
      console.log(data)
      if (data && data.length) {
        this.haveItems = true;
        this.util.hide();
        this.myBookings = data;
      } else {
		  this.util.hide();
	  }
      this.dummy = [];
    }, error => {
      this.util.hide();
      console.log(error);
    }).catch(error => {
      this.util.hide();
      console.log(error);
    });
  }
  goToOrderDetail(data){
    localStorage.setItem('order', JSON.stringify(data.order))
    localStorage.setItem('order-id', data.id)
    this.router.navigate(['order-detail']);
  }

  downloadPdf(downloadLink) {
      let downloadUrl = downloadLink;
      this.toDataURL(downloadUrl, function (dataUrl) {
        var link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'report.pdf';
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

  downloadImage(downloadLink) {
    let str = downloadLink;
    const download_name = 'report.jpg';
   // console.log(download_name);
    this.DataURL(downloadLink, function (dataUrl) {
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
    console.log(id)
    localStorage.setItem('bookingid',id)
    this.router.navigate(['rating'])
  }

  cancel(id){
    localStorage.setItem('bookingid',id)
    this.router.navigate(['/cancel']);
  }

  view(id){
    console.log(id)
    localStorage.setItem('bookingid',id);
    this.router.navigate(['/booking-detail']);
  }
}
