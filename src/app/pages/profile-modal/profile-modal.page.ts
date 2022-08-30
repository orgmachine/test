import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.page.html',
  styleUrls: ['./profile-modal.page.scss'],
})
export class ProfileModalPage implements OnInit {
  
  profile: any;
  name:any = '';
  email:any = '';
  gender:any = '';
  dob:any = '';
  age:any;
  maxDate = moment(new Date()).format('YYYY-MM-DD')

  constructor(
    private api:ApisService,
    private util:UtilService,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    const uid = sessionStorage.getItem('uid');
    this.api.getMyProfile(uid).then((data) => {
      console.log('my profile', data);
      if(data){
        this.name = data.name;
        this.dob = data.dob;
        this.email = data.email;
        this.gender = data.gender;
      }
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  datePickerStart(ev:any){
    this.age = this.calculateAge(ev.detail.value) 
  }

  public calculateAge(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }

  saveProfile(){
    if (this.name === '') {
     this.util.showToast('Name is required', 'danger', 'bottom');
      return false;
    } else if (this.email === '') {
     this.util.showToast('Email is required', 'danger', 'bottom');
      return false;
    } else if (this.dob === '') {
     this.util.showToast('Date of birth is required', 'danger', 'bottom');
      return false;
    } else if (this.gender === '') {
     this.util.showToast('Gender is required', 'danger', 'bottom');
      return false;
    }  
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    let param =  {
      modifiedOn: modifiedOn,
      uid: uid,
      name: this.name,
      age: this.age,
      gender: this.gender,
      dob: this.dob,
      email: this.email,
    }
    console.log(param)
    this.api.updateProfile(uid,param).then((data) => {
      console.log(data)
      this.util.publishProfile(true);
      this.util.showToast('Profile has updated successfully', 'primary', 'bottom');
      this.addMember();
     }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  addMember(){
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const param = {
      uid:uid,
      createdAt: created,
      id: id.toString(),
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      age: this.age
    };
    console.log(param)
    this.api.addMember(id.toString(),param).then((userData) => {
      console.log(userData)
      this.close('true');
    }).catch(err => {
      if (err) {
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  async close(data) {
    console.log(data)
    await this.modalController.dismiss();
  }
}