import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {
  details:any;
  email: any;
  payment_id: any;
  createdAt: any;
  amount: any;
  status: any;
  user_name: any;
    constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
    private api: ApisService,
    private util: UtilService,
	public menu: MenuController
    ) { 
		this.menu.enable(false);
      // this.email = localStorage.getItem('email');
      this.route.queryParams.subscribe(params => {
        console.log(params)
        this.details = params;
        this.payment_id = this.details.transactionid;
        this.createdAt = this.details.createdAt;
        this.amount = this.details.amount;
        this.status = this.details.status;
    });
  }
  
  ionViewWillEnter() {
    const uid = sessionStorage.getItem('uid');
    this.api.getMyProfile(uid).then((info) => {
        this.user_name=info.name; 
        this.email = info.email;
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });  
  }
}