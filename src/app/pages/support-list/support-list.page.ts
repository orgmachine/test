import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
declare var RazorpayCheckout: any;
import Swal from 'sweetalert2';
// import { myEnterAnimation } from 'src/app/animations/enter';
// import { myLeaveAnimation } from 'src/app/animations/leave';
@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.page.html',
  styleUrls: ['./support-list.page.scss'],
})
export class SupportListPage implements OnInit {
  support: any = [];
  haveItems: boolean = false;
  spinner: boolean = false;
    constructor(
    private route: ActivatedRoute,
    public router: Router,
    private api: ApisService,
    private util: UtilService,
    public sanitizer: DomSanitizer,
    private alertCtrl: AlertController,
	public menu: MenuController
    ) {
this.menu.enable(false);		
  }

  ngOnInit() {
    const uid = sessionStorage.getItem('uid');
    this.api.getSupport(uid).then((info) => {
      console.log(info)
      if(info!=undefined) {
        this.haveItems = true;
        this.support = info;    
      }
      this.spinner=true;
    }).catch(err => {
      if (err) {
        console.log(err);
        this.spinner=true;
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });  
  }
}
