import { Component, OnInit } from '@angular/core';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';

@Component({
  selector: 'app-app-cardiology',
  templateUrl: './cardiology.page.html',
  styleUrls: ['./cardiology.page.scss'],
})
export class CardiologyPage implements OnInit {
  cardiology_test:any = [];
  filter_tests:any = [];
  recommended_age = "";
  age_groups = [];
  recommended_fors = [];
  test_recommended_for = '';
  filter:boolean= false;
  constructor(    
    private api: ApisService,
    private util: UtilService,
    public router: Router,
  ) {
      this.getRecommendedFor();
      this.getAgeGroup();
  }

  ionViewWillEnter(){
    this.api.getCardiologyTest().then(data => {
      this.cardiology_test = data;
      this.filter_tests = data;
      console.log(this.cardiology_test)
    }).catch(error => {
      console.log(error);
    });

  }
  ngOnInit(){

  }

  goToDetail(data){
    localStorage.setItem('testid',data.id)
    localStorage.setItem('testname',data.test_name)
    this.router.navigate(['test',data.page_slug])
  }

  clear(){
    this.recommended_age = '';
    this.test_recommended_for ='';
    this.filter = false;
    this.ionViewWillEnter();
  }

  search(){
    
    if(this.recommended_age == '' && this.test_recommended_for ==''){
      
      this.util.showToast('Please select at least one filter', 'danger', 'bottom');
      return false;
    }
    this.cardiology_test = [];
    
    var arr1 = [];
    var arr2 = [];
   
      this.filter = true;
     
      
      for(let x of this.filter_tests){
       
        if(this.recommended_age != '' && this.test_recommended_for ==''){
          for(let y of x.recommended_age){
            if(y.item_id == this.recommended_age){
               this.cardiology_test.push(x);
            }
          }
         
        }else if(this.recommended_age == '' && this.test_recommended_for !=''){
          
          for(let y of x.test_recommended_for){
           
            if(y == this.test_recommended_for){
               this.cardiology_test.push(x);
            }
          }
        }else{
           for(let y of x.recommended_age){
            if(y.item_id == this.recommended_age ){
               arr1.push(x);
            }
          }
          for(let y of x.test_recommended_for){
            if(y == this.test_recommended_for){
               arr2.push(x);
            }
          }

          this.cardiology_test = arr1.filter(value => arr2.includes(value));
        }

      }
      console.log('item',this.cardiology_test);
       if(this.cardiology_test.length >0){
         this.cardiology_test.sort((a, b) => a.test_name.localeCompare(b.test_name));
       }else{
        this.util.showToast('No Data Found', 'danger', 'bottom');
       }
     
     
     
    
  }

  async getAgeGroup() {
     await this.api.getAgeGroup().then(async data => {
      console.log(data);
      if(data){
        this.age_groups = data;
      }

    }).catch(error => {
      console.log(error);
    });
  }

  async getRecommendedFor() {
     await this.api.getRecommendedFor().then(async data => {
      console.log(data);
      this.recommended_fors = data;
    }).catch(error => {
      console.log(error);
    });
  }

}
