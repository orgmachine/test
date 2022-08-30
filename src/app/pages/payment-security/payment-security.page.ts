import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-payment-security',
  templateUrl: './payment-security.page.html',
  styleUrls: ['./payment-security.page.scss'],
})
export class PaymentSecurityPage{
  return_policy:any;
  settings: any;
    constructor(    
      private api: ApisService,
      private util: UtilService,
    public menu: MenuController
	) {
		this.menu.enable(false);
      this.api.getSettings().then(data => {
        this.settings = data[0];
        console.log(this.settings)
        this.return_policy = this.settings.payment_and_security;
      }).catch(error => {
        console.log(error);
      });
  }

}
