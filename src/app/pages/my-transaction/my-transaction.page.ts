import { Component, OnInit } from '@angular/core';
import { AlertController,ActionSheetController, MenuController  } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';

@Component({
  selector: 'app-my-transaction',
  templateUrl: './my-transaction.page.html',
  styleUrls: ['./my-transaction.page.scss'],
})
export class MyTransactionPage {
  transactions: any = [];
  haveItems: boolean = false;
  email: any;
  start_date: any='';
  end_date: any='';
  maxDate: any = new Date();
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private api: ApisService,
    private util: UtilService,
    private alertCtrl: AlertController,
	  public menu: MenuController
    ) { }
  ionViewWillEnter() {
    this.getTransaction();
  }

  getTransaction(){
    const uid = sessionStorage.getItem('uid');
    this.api.getMyTransaction(uid).then(data=> {
      if(data&&data.length!=0){
      this.transactions=data;
      console.log(this.transactions)
      this.haveItems = true;
    }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
  transaction(item){
    let navigationExtras: NavigationExtras = { 
        queryParams: item
    };
    this.router.navigate(['/payment'],navigationExtras);
  }

  async submit() {
    let uid = sessionStorage.getItem('uid');
    if (this.start_date == ''){
      this.util.showToast('Please select start date', 'danger', 'bottom');
    } 
    if (this.end_date == ''){
      this.util.showToast('Please select end date', 'danger', 'bottom');
    }  
    if (this.start_date > this.end_date){
      this.util.showToast('Start date can not be greater than end date', 'danger', 'bottom');
    }
    this.util.show('Please wait....')
    this.transactions = [];
    this.api.getTransaction(uid,this.start_date,this.end_date).then(data=> {
      console.log(data)
      if(data&&data.length!=0){
        this.transactions=data;
        this.util.hide();
        this.haveItems = true;
      } else {
        console.log(data)
    		this.util.hide();
  	  }
    }).catch(err => {
      if (err) {
        console.log(err)
        this.util.hide();
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
}
