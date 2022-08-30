import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalController, NavParams} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  addressForm: FormGroup;
  pincode: any = '';
  addNewAddress: any;
  modalTitle: any;
  societyId: any;
  addressData: any;
  mobile: any;
  profile: any;
  city: any = '';
  state: any = '';
  street: any = '';
  locality: any = '';
  landmark: any = '';
  pincodeList:any;
  phone: any;
  label: any;
  routeFrom: any;
  new:boolean= false;
  constructor(
    private api: ApisService,
    private util: UtilService,
    private modalController: ModalController,
    private translate: TranslateService,
    private router: Router,
    private navParams: NavParams,
    public formBuilder: FormBuilder,
  ) {
     this.routeFrom = localStorage.getItem('routeFrom');
      console.log(this.routeFrom)
      if(this.routeFrom == 'add'){
        this.new = true;
        this.getPincode();
      }else{
        this.new = false;
        this.ngOnInit();
      }

    this.addressForm = this.formBuilder.group({
      // name: ['', Validators.required],
      // email: ['', [Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],    
      street: ['', Validators.required],
      label: ['', Validators.required],
      locality: ['', Validators.required], 
      pincode: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(6)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
    })
  }
  
  getPincode() {
    let id = localStorage.getItem('pincode');
    this.api.getPincodeById(id).then((data) => {
      console.log(data);
      if (data && data.length) {
        this.pincodeList = data[0];
        this.pincode = this.pincodeList.pincode;
        this.getCity(this.pincodeList.cityid);
      }
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  getCity(id){
    this.api.getCityByPincodeId(id).then((data) => {
      console.log(data);
      if (data && data.length) {
        this.city = data[0].city
        this.getState(data[0].state);
      }
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  getState(id){
    this.api.getStateByCityId(id).then((data) => {
      console.log(data);
      if (data && data.length) {
        this.state = data[0].name;
        // this.pincodeList = data[0];
        // this.getState(this.pincodeList.id);
      }
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  ngOnInit() {
    this.modalTitle = this.navParams.data.modalTitle;
    if (this.modalTitle == 'Manage') {
      this.addressData = this.navParams.data.data;
      console.log(this.addressData);
      this.mobile = this.addressData.phone;
      this.street = this.addressData.street;
      this.city = this.addressData.city;
      this.state = this.addressData.state;
      this.pincode = this.addressData.pincode;
      this.locality = this.addressData.locality;
      this.landmark = this.addressData.landmark;
      this.label = this.addressData.label;
     
      
    } else {
      /*const uid = localStorage.getItem('uid');
      this.api.getMyProfile(uid).then((data) => {
        console.log(data)
        if(data != undefined) {
          this.profile = data;
          this.name = this.profile.name;
          this.email = this.profile.email;
          this.mobile = this.profile.phone;
          console.log(this.name,this.email);
        }
      }, error => {
        console.log(error);
      }).catch(error => {
        console.log(error);
      });*/

    }
  }

  update(){
    let id = this.addressData.id;
     const date = new Date();
    const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const uid = sessionStorage.getItem('uid');
     let params =  {
        id: id.toString(),
        updatedAt: updatedAt,
        uid: uid,
        phone: this.mobile,
        street: this.street,
        city: this.city,
        state: this.state,
        pincode: this.pincode,
        locality: this.locality,
        landmark: this.landmark,
        label: this.label
      }
    this.api.updateAddress(uid,id,params).then((data) => {
      console.log(data)
      this.util.showToast('Address updated successfully', 'primary', 'bottom');
      this.closeModal();
     }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  add(){
    const date = new Date();
    const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const uid = sessionStorage.getItem('uid');
    console.log(uid)
     let params =  {
        id: id.toString(),
        createdAt: createdAt,
        uid: uid,
        phone: this.mobile,
        street: this.street,
        city: this.city,
        state: this.state,
        pincode: this.pincode,
        locality: this.locality,
        landmark: this.landmark,
        label: this.label
      }
      console.log(params)
    this.api.addNewAddress(uid,id.toString(),params).then((data) => {
      console.log(data)
      this.closeModal();
     }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}