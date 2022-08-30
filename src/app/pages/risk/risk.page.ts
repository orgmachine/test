import { Component, OnInit } from '@angular/core';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';

@Component({
  selector: 'app-app-risk',
  templateUrl: './risk.page.html',
  styleUrls: ['./risk.page.scss'],
})
export class RiskPage implements OnInit {
  all_test:any = [];
  risk_test: any = [];
  risk_id: any;
  risk_detail: any;
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
    this.risk_id = localStorage.getItem('riskid')
    console.log(this.risk_id)
    this.api.getHealthRiskById(this.risk_id).then((info) => {
      console.log(info)
      this.risk_detail = info[0];
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
  ngOnInit(){
    this.filter_tests = [];
    this.api.getIndividualTest().then(data => {
      this.all_test = data;
      for(let x of this.all_test){
        for (let y of x.health_risk){
          if(y.item_id == this.risk_id){
            console.log('matched')
            this.risk_test.push(x);
            this.filter_tests.push(x);
            console.log(this.risk_test)
          }
        }
      }
      this.risk_test.sort((a, b) => a.test_name.localeCompare(b.test_name));
    }).catch(error => {
      console.log(error);
    }); 
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
    this.ngOnInit();
  }


  search(){
    
    if(this.recommended_age == '' && this.test_recommended_for ==''){
      
      this.util.showToast('Please select at least one filter', 'danger', 'bottom');
      return false;
    }
    this.risk_test = [];
    
    var arr1 = [];
    var arr2 = [];
   
      this.filter = true;
     
      
      for(let x of this.filter_tests){
       
        if(this.recommended_age != '' && this.test_recommended_for ==''){
          for(let y of x.recommended_age){
            if(y.item_id == this.recommended_age){
               this.risk_test.push(x);
            }
          }
         
        }else if(this.recommended_age == '' && this.test_recommended_for !=''){
          
          for(let y of x.test_recommended_for){
           
            if(y == this.test_recommended_for){
               this.risk_test.push(x);
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

          this.risk_test = arr1.filter(value => arr2.includes(value));
        }

      }
      console.log('item',this.risk_test);
       if(this.risk_test.length >0){
         this.risk_test.sort((a, b) => a.test_name.localeCompare(b.test_name));
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
