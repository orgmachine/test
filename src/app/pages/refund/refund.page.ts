import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-refund',
  templateUrl: './refund.page.html',
  styleUrls: ['./refund.page.scss'],
})
export class RefundPage {
  refund:any;
  settings: any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
	  public menu: MenuController,
    private api: ApisService
  ) { 
	  this.menu.enable(false);
    this.api.getSettings().then(data => {
      this.settings = data[0];
      this.refund = this.settings.return_and_exchange;
	   console.log(this.refund);
    }).catch(error => {
      console.log(error);
    });
  }
}