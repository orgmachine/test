import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-diagnostic-lab',
  templateUrl: './diagnostic-lab.page.html',
  styleUrls: ['./diagnostic-lab.page.scss'],
})
export class DiagnosticLabPage {
  lab_detail: any;
  facilities: any = [];
  facility: any =[];
  operational_timing: any = [];
  reviews: any = [];
  avgrate: any = 0;
  booking_exp: any = 0;
  slot_timing: any = 0;
  result_quality: any = 0;
  price: any = 0;
  collection_process: any = 0;
  total_review_count: any = 0;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private api: ApisService,
    private util: UtilService,
  ) { 
    this.getFacilities();
		let labid = localStorage.getItem('labid')
    this.getSecondaryLab(labid);
    this.getLabReview(labid)
  }
  async getFacilities() {
    await this.api.getFacilities().then(async(data) => {
      console.log(data);
      this.facilities = data;
    }).catch(error => {
      console.log(error);
    });
  }
  getSecondaryLab(labid){
    this.api.getSecondaryLabById(labid).then((info) => {
      console.log(info)
      this.lab_detail = info[0];
      for(let x of this.lab_detail.facility){
        let name = '';
        let arr = [];
        for(let y of this.facilities){
          if(y.id == x){
            this.facility.push(y.name)
          }
        }
      }
      let timing = [];
      for(let x of this.lab_detail.lab_timings){
        if(x.opening_day == '1'){
          timing.push({
            id:0,
            day_name:'Mon',
            opening_time: x.opening_time,
            closing_time: x.closing_time
          })
        } else if (x.opening_day == '2'){
          timing.push({
            id:1,
            day_name:'Tue',
            opening_time: x.opening_time,
            closing_time: x.closing_time
          })
        } else if (x.opening_day == '3'){
          timing.push({
            id:2,
            day_name:'Wed',
            opening_time: x.opening_time,
            closing_time: x.closing_time
          })
        } else if (x.opening_day == '4'){
          timing.push({
            id:3,
            day_name:'Thu',
            opening_time: x.opening_time,
            closing_time: x.closing_time
          })
        } else if (x.opening_day == '5'){
          timing.push({
            id:4,
            day_name:'Fri',
            opening_time: x.opening_time,
            closing_time: x.closing_time
          })
        } else if (x.opening_day == '6'){
          timing.push({
            id:5,
            day_name:'Sat',
            opening_time: x.opening_time,
            closing_time: x.closing_time
          })
        } else if (x.opening_day == '0'){
          timing.push({
            id:6,
            day_name:'Sun',
            opening_time: x.opening_time,
            closing_time: x.closing_time
          })
        }
      }
      this.operational_timing = timing.sort((a, b) => a.id - b.id);
      console.log(this.operational_timing)
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
  getLabReview(id){
    this.api.getReviewsByLabId(id).then((data) => {
      console.log(data)
      if(data && data.length !==0){
      this.reviews = data;
      var n = 0;
      var avgrate = 0;
      var booking_exp = 0;
      var slot_timing = 0;
      var result_quality = 0;
      var price = 0;
      var collection_process = 0;
      this.reviews.forEach(async element =>{
          console.log(element)
          n=n+1;
          avgrate += (element.booking_exp+element.collection_process+element.price+element.result_quality+element.slot_timing)/5;
          console.log(avgrate)
          booking_exp += element.booking_exp;
          slot_timing += element.slot_timing;
          result_quality += element.result_quality;
          price += element.price;
          collection_process += element.collection_process;
          element.avgrate = avgrate;
          console.log(collection_process)
      });
      this.avgrate = (avgrate/n).toFixed(1);
      this.booking_exp =(booking_exp/n).toFixed(1); 
      this.slot_timing =(slot_timing/n).toFixed(1); 
      this.result_quality =(result_quality/n).toFixed(1); 
      this.price =(price/n).toFixed(1); 
      this.collection_process =(collection_process/n).toFixed(1); 
      this.total_review_count = n;
      // console.log(this.avgrate, this.booking_exp, this.slot_timing , this.result_quality, this.price, this.collection_process)
    }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
}