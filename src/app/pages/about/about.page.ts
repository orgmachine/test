import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  about:any;
  members: any = [];
  settings: any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
	  public menu: MenuController,
    private api: ApisService,
  ) { 
    this.api.getAboutUs().then(data => {
      this.about = data[0];
      console.log(this.about)
    }).catch(error => {
      console.log(error);
    });  
    this.api.getTeamMember().then(data => {
      this.members = data;
      console.log(this.members)
    }).catch(error => {
      console.log(error);
    });
    this.api.getSettings().then(data => {
      this.settings = data[0];
    }).catch(error => {
      console.log(error);
    });
  }

  viewInfo(data){
    localStorage.setItem('memberid',data.id)
    this.router.navigate(['team',data.name]);
  }
}