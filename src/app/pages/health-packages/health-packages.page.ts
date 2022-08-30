import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-health-packages',
  templateUrl: './health-packages.page.html',
  styleUrls: ['./health-packages.page.scss'],
})
export class HealthPackagesPage {
  all_packages:any = [];
  filter_tests:any = [];
  recommended_age = "";
  age_groups = [];
  recommended_fors = [];
  test_recommended_for = '';
  filter:boolean= false;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
	  public menu: MenuController,
    private util: UtilService,
    private api: ApisService
  ) { 
    this.getRecommendedFor();
    this.getAgeGroup();
}

  ionViewWillEnter(){
    this.api.getAllHealthPackages().then(data => {
      this.all_packages = data;
      this.filter_tests = data;
      console.log(this.all_packages)
      this.all_packages.sort((a, b) => a.test_name.localeCompare(b.test_name));
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
    this.ionViewWillEnter();
  }


  search(){
    
    if(this.recommended_age == '' && this.test_recommended_for ==''){
      
      this.util.showToast('Please select at least one filter', 'danger', 'bottom');
      return false;
    }
    this.all_packages = [];
    
    var arr1 = [];
    var arr2 = [];
   
      this.filter = true;
     
      
      for(let x of this.filter_tests){
       
        if(this.recommended_age != '' && this.test_recommended_for ==''){
          for(let y of x.recommended_age){
            if(y.item_id == this.recommended_age){
               this.all_packages.push(x);
            }
          }
         
        }else if(this.recommended_age == '' && this.test_recommended_for !=''){
          
          for(let y of x.test_recommended_for){
           
            if(y == this.test_recommended_for){
               this.all_packages.push(x);
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

          this.all_packages = arr1.filter(value => arr2.includes(value));
        }

      }
      console.log('item',this.all_packages);
       if(this.all_packages.length >0){
         this.all_packages.sort((a, b) => a.test_name.localeCompare(b.test_name));
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