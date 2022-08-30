import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { CalendarComponentOptions } from 'ion2-calendar';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  memberForm: FormGroup;
  name: any;
  dob: any;
  gender: any;
  age: any;
  profile: any;
  // minDate = moment(new Date()).format('YYYY-MM-DD')
  maxDate = moment(new Date()).format('YYYY-MM-DD')
  customAlertOptions: any = {
    header: 'Select Gender',
    translucent: true
  };
  date:string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsSingle: CalendarComponentOptions = {
    color: 'danger',
    from: new Date(),
    disableWeeks: [0]
  };
  redirectRoute: any = '';
  constructor(
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    private api: ApisService,
    private util: UtilService,
  ) { 
    this.memberForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    })
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      color: 'danger',
      to: new Date(),
    };
 
    const myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options }
    });
 
    myCalendar.present();
 
    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date);
 }

  ngOnInit() {
    this.redirectRoute = localStorage.getItem('routeFrom');
    let id = localStorage.getItem('memberid')
    console.log(this.redirectRoute)
    if(this.redirectRoute == 'edit'){
      this.api.getMemberById(id).then(async(info) => {
        this.profile = info[0];
             console.log(this.profile)
        // name: this.profile.name;
        // dob: this.profile.dob;
        // gender: this.profile.gender;
      }).catch(err => {
        if (err) {
          console.log(err);
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }
      });
    } else {
      console.log('ho')
    }
  }

  datePickerStart(ev:any){
    this.age = this.calculateAge(ev.detail.value) 
  }

  public calculateAge(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }

  add(){
    this.util.show('Please wait....')
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
      this.util.hide();
      this.close();
    }).catch(err => {
      if (err) {
        this.util.hide();
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  update(){
   this.util.show('Please wait....')
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const param = {
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      age: this.age,
      updatedAt:created
    };
    this.api.addMember(this.profile.id,param).then((userData) => {
      this.util.hide();
      this.util.showToast("Patient details updated successfully", 'primary', 'bottom');
      this.close();
    }).catch(err => {
      if (err) {
        this.util.hide();
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  async close() {
    await this.modalController.dismiss();
  }
}
