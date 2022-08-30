import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage {
  privacy:any;
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
      this.privacy = this.settings.privacy;
    }).catch(error => {
      console.log(error);
    });
  }
}