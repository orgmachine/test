import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage {
  all_packages:any = [];
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
	  public menu: MenuController,
    private api: ApisService
  ) { 
  }

  ionViewWillEnter(){
    this.api.getAllHealthPackages().then(data => {
      this.all_packages = data;
      console.log(this.all_packages)
    }).catch(error => {
      console.log(error);
    });
  }
}