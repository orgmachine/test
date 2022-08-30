import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
	booking_id: any;
  detail: any;
  booking_detail: any;
  lab_detail: any;
  address: any;
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private navCtrl: NavController,
	  private api: ApisService,
    private util: UtilService
	 ) 
	 {
      this.booking_id = localStorage.getItem('bookingid');
      console.log(this.booking_id)     
      this.address = localStorage.getItem('boookingaddress');
      this.getBooking(this.booking_id)
   }

  ngOnInit() {
  	// this.route.queryParams.subscribe(data => {
  	// 	console.log(data)
   //    if (data && data.from) {
   //      this.data = data;
   //      this.from = data.from;
   //    }
   //  });
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

  bookings(){
  	this.router.navigate(['/bookings'])
  }

}
