import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage {
  terms:any;
  settings: any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
	  public menu: MenuController,
    private api: ApisService,
  ) { 
		this.menu.enable(false);
    this.api.getSettings().then(data => {
      this.settings = data[0];
      this.terms = this.settings.terms;
    }).catch(error => {
      console.log(error);
    }); 
 
  }
}