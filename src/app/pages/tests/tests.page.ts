import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage {
  all_tests:any = [];
  filter_tests:any = [];
  alphabets: any = [];
  activeLetter = '';
  recommended_age = "";
  age_groups = [];
  recommended_fors = [];
  test_recommended_for = '';
  individualTest:any;
  filter:boolean= false;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
	  public menu: MenuController,
    private util: UtilService,
    private api: ApisService
  ) { 
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    this.alphabets = alphabets.toUpperCase().split("");
    console.log(this.alphabets);
    this.getRecommendedFor();
    this.getAgeGroup();
    //this.updateIndividualTest();
  }



  ionViewWillEnter(){
    this.recommended_age = '';
    this.test_recommended_for ='';
    this.api.getAllIndividualTest().then(data => {
      this.all_tests = data;
      this.all_tests.sort((a, b) => a.test_name.localeCompare(b.test_name))
    }).catch(error => {
      console.log(error);
    });
  }


  updateIndividualTest(){

    this.api.getIndividualTest().then(data => {
      this.individualTest = data;
      for(let p of this.individualTest){
      
       /*var recommended_age = []; 
       for(var x in this.age_groups){
        if(p.id == x.id){
          recommended_age.push({item_id: x.id, item_text: x.test_name});
        }
       }*/
        const param = {
      
        
          display_order: Number(0),
      
    };
    console.log(param);
   
    this.api.updateNewIndividual_test(p.id, param).then((data) => {
    
    }, error => {
    
    }).catch(error => {
   
    });


      }
    }).catch(error => {
      console.log(error);
    });

  }

  clear(){
    
    this.filter = false;
    this.ionViewWillEnter();
  }


  search(){
    
    if(this.recommended_age == '' && this.test_recommended_for ==''){
      
      this.util.showToast('Please select at least one filter', 'danger', 'bottom');
      return false;
    }
    this.all_tests = [];
    this.activeLetter = '';
    var arr1 = [];
    var arr2 = [];
     this.api.getAllIndividualTest().then(data => {
      this.filter = true;
      this.filter_tests = data;
      
      for(let x of this.filter_tests){
       
        if(this.recommended_age != '' && this.test_recommended_for ==''){
          for(let y of x.recommended_age){
            if(y.item_id == this.recommended_age){
               this.all_tests.push(x);
            }
          }
         
        }else if(this.recommended_age == '' && this.test_recommended_for !=''){
          
          for(let y of x.test_recommended_for){
           
            if(y == this.test_recommended_for){
               this.all_tests.push(x);
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

          this.all_tests = arr1.filter(value => arr2.includes(value));
        }

      }
      console.log('item',this.all_tests);
       if(this.all_tests.length >0){
         this.all_tests.sort((a, b) => a.test_name.localeCompare(b.test_name));
       }else{
        this.util.showToast('No Data Found', 'danger', 'bottom');
       }
     
     
      }).catch(error => {
        console.log(error);
      });
    
  }

   goToDetail(data){
    localStorage.setItem('testid',data.id)
    localStorage.setItem('testname',data.test_name)
    this.router.navigate(['test',data.page_slug])
  }

  activateLetter(letter) {
    console.log(letter);
    this.activeLetter = letter
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