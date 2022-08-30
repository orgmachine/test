import { Component, OnInit } from '@angular/core';
import { AlertController,ModalController, MenuController  } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage {
  members: any = [];
  haveItems: boolean = false;
  email: any;
  dues: any = [];
  segmentModel = "due";
  user_name: any;
  
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private api: ApisService,
    private util: UtilService,
    private alertCtrl: AlertController,
    public modalController: ModalController,
	  public menu: MenuController
  ) { 
	// this.menu.enable(false);
  }

  ionViewWillEnter() {
    const uid = sessionStorage.getItem('uid');
    this.api.getMemberByUId(uid).then((info) => {
      console.log(info)
      this.members = info;
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  async openModal(){
    localStorage.setItem('routeFrom','add')
    const modal = await this.modalController.create({
      component: UpdateComponent,
      cssClass: 'update-modal-css',
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }

  async edit(id){
    localStorage.setItem('memberid',id)
    localStorage.setItem('routeFrom','edit')
    const modal = await this.modalController.create({
      component: UpdateComponent,
      cssClass: 'update-modal-css',
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }

  delete(id){
    const uid = sessionStorage.getItem('uid');
    this.api.deleteMember(uid,id).then((data) => {
    console.log(data)
    this.members = [];
    this.ionViewWillEnter();
    this.util.showToast("Patient Deleted Successfully", 'primary', 'bottom');
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

}