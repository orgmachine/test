import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  haveItems: boolean = false;

  all_notifications: any = [];
  constructor(
    private api: ApisService,
    private router: Router,
    private util: UtilService,
    private navCtrl: NavController,
    private chMod: ChangeDetectorRef
  ) {    
  }

  ngOnInit() {
    const uid = sessionStorage.getItem('uid');
    this.api.getNotifications(uid).then((data) => { 
      if(data&&data.length!=0){
        this.all_notifications=data;
      }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });  
  }
}
