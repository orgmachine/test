import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  list: any[] = [];
  societyId: any;
  society_name: any;
  total: any;
  dummy = Array(10);
  usedCoupon: any = [];
  constructor(
    private api: ApisService,
    private route: ActivatedRoute,
    private util: UtilService,
    private navCtrl: NavController,
	  public menu: MenuController
  ) {
	  this.menu.enable(false);
  }

  ngOnInit() {
  }
  claim(data){
    
  }
}
