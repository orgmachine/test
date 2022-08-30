import { Component, VERSION } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { UtilService } from 'src/app/services/util.service';
import { ApisService } from 'src/app/services/apis.service';
import { orderBy, uniqBy } from 'lodash';
import * as moment from 'moment';
import {parse, stringify, toJSON, fromJSON} from 'flatted';

import * as $ from "jquery";
import Swal from 'sweetalert2';
declare var google;

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage {
  test:any;
  age_recomendation: any = [];
  gender_recomendation: any = [];
  tab: any;
  showContent1: boolean = false;
  addToBucket: any = [];
  newBucketArray:any= [];
  pincode: any;
  latitude: any;
  longitude: any;
  pushSecondaryLabs: any = [];
  finalLabs: any =[];
  reviews =[];
  facilities =[];
  associated_tests = [];
  primary_lab = [];
  all_labs: any = [];
  secondary_labs: any = [];
  associated_test: any=[];
  all_tests: any = [];
  paramarr = [];
  testid = "";
  testname = "";
  total_parameter_count: any = 0;
  status:any = 'Description';
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private util: UtilService,
    private alertCtrl: AlertController,
	  public modalController: ModalController,
    private api: ApisService
  ) { 
    this.tab = -1;
    // this.getIndividualTest();
    this.getFacilities();
    // this.getAssociatedTests();
    this.getReviews();
  }

  showContent(item) {
    return this.tab === item;
  }

  showMilestone(item){
    this.tab = item;
  }

  showMilestone1(){
    this.showContent1 = !this.showContent1 ;
  }

  getIndividualTest(){
    this.api.getAllIndividualTest().then(data => {
      this.all_tests = data;
    }).catch(error => {
      console.log(error);
    });
  }

  book(){
  this.util.show('Please wait....');
   var prdexist = false;
   if(this.addToBucket.length > 0){
    for(var x of this.addToBucket){
        if(x == this.testid){
          prdexist = true;
        }
      }
    }
    if(prdexist == false){
      this.addToBucket.push(this.testid);
      this.newBucketArray.push(this.testname)
      localStorage.setItem('addToBucket',this.addToBucket);
      localStorage.setItem('newBucketArray',this.newBucketArray);
    }
   /* this.pincode = localStorage.getItem('pincode');
    if(this.pincode == undefined){
      this.pincode = localStorage.getItem('current_pincode');
    }*/
    this.util.hide();
    console.log(this.addToBucket)
    console.log(this.newBucketArray)
   // this.searchLabs2();
    this.searchLabs3();
  }

  async searchLabs2(){
      if (this.addToBucket.length === 0) {
      this.util.showToast('Select your test', 'danger', 'bottom');
      return false;
    } else if (this.pincode === '' || this.pincode == null) {
      this.util.showToast('Pincode is required', 'danger', 'bottom');
      return false;
    }

    console.log(this.pincode);
    await this.api.getSecondaryLabsByPin(this.pincode).then(async(data) => {
      this.secondary_labs = data;

  if (this.secondary_labs.length === 0) {
      this.util.showToast('There are no labs found for this pincode', 'danger', 'bottom');
      return false;
    }

      console.log(this.secondary_labs);
      console.log(this.addToBucket);
      this.associated_test = [];
      if(data){
        var i = 1;
        await this.secondary_labs.forEach(async element =>{
          console.log(element.primarylab)
         await this.api.getVenueDetails(element.primarylab).then(async(data6) => {
                  console.log(data6)
                  if(data6){
                   element.primarylabdata= data6;
                   element.primarylogo= data6.logo;
                  }
                }).catch(error => {
                  this.util.hide(); 
                  console.log(error);
                });

                console.log(element);

        var j = 1;
          for(var y of this.addToBucket){
            console.log(y)
            await this.api.getAssociatedTestByProductAndBranch(element.uid,y).then(async(data1) => {
              console.log(data1);
              if(data1.length > 0){
                await this.api.getLabTestById(data1[0].individual_test).then(async(data2) => {
                  if(data2.length > 0){
                   data1[0].itid = data2[0];
                  }
                }).catch(error => {
                  this.util.hide(); 
                  console.log(error);
                });
                this.associated_test.push(data1[0]);
                console.log(i +"=="+ this.secondary_labs.length +"&&"+ j +"=="+ this.addToBucket.length)
              }
              if(i == this.secondary_labs.length && j == this.addToBucket.length){
                    await this.searchLabs3();                  
                }
            }).catch(error => {
              this.util.hide(); 
              console.log(error);
            });
            j++;
          }
          if(i == this.secondary_labs.length && this.associated_test.length == 0){
            await this.searchLabs3();
          }
          i++;


        });
      }else{
        await this.searchLabs3();
      }
    }).catch(error => {
      this.util.hide(); 
      console.log(error);
    });

  }
 
  async searchLabs3(){
    /*if (this.addToBucket.length === 0) {
      this.util.showToast('Select your test', 'danger', 'bottom');
      return false;
    } else if (this.pincode === '') {
      this.util.showToast('Pincode is required', 'danger', 'bottom');
      return false;
    }*/
      this.util.show('Please wait....');
    /*  let lat;
      let lng;
    if(this.pincode == localStorage.getItem('current_pincode')){
      lat = localStorage.getItem('lat');
      lng = localStorage.getItem('lng');
    } else {
      var geocoder = new google.maps.Geocoder();
      var address = this.pincode;
      await geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          lat = latitude;
          lng = longitude;
          // alert("Latitude: " + latitude + "\nLongitude: " + longitude);
        } else {
            alert("Request failed.")
        }
      });
    }*/

    console.log(this.secondary_labs);
    // console.log(this.associated_test);

    await this.secondary_labs.forEach(async element =>{
      var price = 0;
          var selling_price = 0;
          var all_test_data= [];
          var all_test1_data= [];
          var available_test = [];
          var not_available_test = [];
          console.log(this.associated_test)
          for (let x of this.associated_test){ 
            if(x.branch_id == element.uid){
              console.log('available data')
                all_test_data.push(x);
                available_test.push(x.itid.test_name);           
                price += x.price;
                selling_price += x.selling_price;
            } 
          }

          for (let x of this.addToBucket){ 
          var is_available = false;

            console.log(x);
            for(var y of all_test_data){
             console.log(x+"=="+y.individual_test);
              if(x == y.individual_test){ 
                is_available = true;
              }
            }
            console.log(is_available);
            if(is_available == false){
              all_test1_data.push(x);
            }
          }

          console.log(all_test1_data)

          var test2data = [];
          //newBucketArray
          let difference = this.newBucketArray.filter(x => !available_test.includes(x));
          not_available_test.push(difference);
          test2data.push(difference);
          
          // for(var x of this.newBucketArray){
          //   for(var y of available_test){
          //     if(x.trim() != y.trim()){
          //       not_available_test.push(x.trim());
          //       test2data.push(x);
          //     }
          //   }
          // }
          // for (let x of this.associated_tests){
          //   for(var y of all_test1_data){
          //     if(x.individual_test == y){
          //       test2data.push(x);
          //       not_available_test.push(x.itid.test_name);
          //     }
          //   }
          // } 

          all_test1_data = test2data;

          var average_rating = 0;

          element.test_data = all_test_data;
          element.test1_data = all_test1_data;
          element.available_test = available_test;
          element.not_available_test = not_available_test;
          element.price = price;
          element.selling_price = selling_price;

         //var distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
          var distance =0;
          element.distance = distance;

          var rating_array = [];

          var facilities = [];

          for (let x of this.facilities){
            for (let y of element.facility){
              if(x.id == y){
                facilities.push(x);
              }  
            }
          }
          console.log(facilities)

          element.facilities = facilities;

          for (let x of this.reviews){
            if(x.lab_id == element.id){
              rating_array.push(x);
            }  
          }

          element.total_reviews = 0;
          if(rating_array.length>0){
            var avgrate = 0;
            var rating_length = rating_array.length;
              for(var x of rating_array){
                avgrate += (x.booking_exp+x.collection_process+x.price+x.result_quality+x.slot_timing)/5;
              }
            average_rating = avgrate/rating_length;
            element.total_reviews = rating_array.length;
          }

          element.average_rating = average_rating;
    });

     console.log(this.secondary_labs);
     // return false;

    this.secondary_labs.sort( this.compare);
      var newSortedArray = [];
      for(var x of this.secondary_labs){
        if(x.test_data.length > 0){
          newSortedArray.push(x);
        }
      }

      this.secondary_labs = newSortedArray;
      console.log(this.secondary_labs);
      console.log(this.newBucketArray);
      console.log(this.addToBucket);
      const circularReplacer = () => {
        
          // Creating new WeakSet to keep 
          // track of previously seen objects
          const seen = new WeakSet();
            
          return (key, value) => {
        
              // If type of value is an 
              // object or value is null
              if (typeof(value) === "object" 
                         && value !== null) {
                
              // If it has been seen before
              if (seen.has(value)) {
                       return;
                   }
                     
                   // Add current value to the set
                   seen.add(value);
             }
               
             // return the value
             return value;
         };
      };
      let arr = []
      for(let x of this.secondary_labs){
        arr.push({
          address: x.address,
          available_test: x.available_test,
          cod: x.cod,
          cover: x.cover,
          distance:x.distance,
          price:x.price,
          selling_price:x.selling_price,
          total_reviews:x.total_reviews,
          facilities: x.facilities,
          id: x.id,
          //lat:x.lat,
         // lng:x.lng,
          name:x.name,
          lab_timings:x.lab_timings,
          not_available_test:x.not_available_test,
          logo:x.logo,
          range_price:x.range_price,
          service_delivery:x.service_delivery,
          test1_data:x.test1_data,
          test_data:x.test_data,
          free_charge: x.free_charge,
          page_slug:x.page_slug,
          primarylogo:x.primarylogo,
          primarylabdata:x.primarylabdata
        })
      }
      var jsonString = stringify(arr);
      localStorage.setItem('labsdata', jsonString);
      localStorage.setItem('newBucketArray',stringify(this.newBucketArray))
      localStorage.setItem('addToBucket',stringify(this.addToBucket))
      this.util.hide();
      this.router.navigate(['search-labs']);
  }


  ngOnInit(){
    console.log("I am here");
    let id = localStorage.getItem('testid')
    this.testid = localStorage.getItem('testid');
    this.testname = localStorage.getItem('testname');
    console.log(this.testname);
    // this.addToBucket.push(id);
    // localStorage.setItem('addToBucket',this.addToBucket);
    this.pincode = localStorage.getItem('pincode');
    this.api.getIndividualTestById(id).then(data => {
      this.test = data[0];
      console.log(this.test)
      if(this.test.parameter.length > 0){
        let outer_parameter_count = '';
        let inner_parameter_count = '';
        let outer_param = [];
        let inner_param = [];
        let arr = [];
        let outer_parameter_id = '';
        let inner_parameter_id = '';
        let inner_page_slug = '';
        for (let x of this.test.parameter) {
          // console.log(x)
          let count = 0;
          for(let y of this.all_tests) {
            if(x.item_id == y.id) {
              console.log(y.parameter.length);
              this.total_parameter_count =  this.total_parameter_count + y.parameter.length;
              console.log(this.total_parameter_count)
              // outer_parameter_count = this.test.parameter.length;
              // inner_param = y.parameter;
              // inner_parameter_count = y.parameter.length;
              // outer_param = this.test.parameter;
              // outer_parameter_id = x.item_id;
              // inner_parameter_id = y.id;
              // inner_page_slug: x.page_slug;
            }
          }
          // arr.push({
          //   outer_parameter_count:outer_parameter_count,
          //   inner_param:inner_param,
          //   inner_parameter_count:inner_parameter_count,
          //   outer_param:outer_param,
          //   outer_parameter_id:outer_parameter_id,
          //   inner_parameter_id:inner_parameter_id,
          //   inner_page_slug:inner_page_slug
          // })
          console.log(arr)
        }
        console.log(this.total_parameter_count)
        // this.paramarr = arr;
        // console.log(this.paramarr)
      }else{
        this.test.parameter.push({item_id:1,item_text:this.test.test_name});
      }
     // this.newBucketArray.push(this.test.test_name)
      //localStorage.setItem('newBucketArray',this.newBucketArray)
      let test_recommended_for = [];
      let recommended_age = [];
      test_recommended_for = this.test.test_recommended_for;
      recommended_age = this.test.recommended_age;
      console.log(test_recommended_for);
      console.log(recommended_age);
      this.getAgeRecomendation(recommended_age);
      this.getGenderRecomendation(test_recommended_for);
    }).catch(error => {
      console.log(error);
    });
  }

  
  //open Tab
  openTab(tabName) {
    this.status = tabName;
    let v = document.getElementsByClassName(tabName);
    var i;
    var x = document.getElementsByClassName("section");
    console.log(x);

    for (i = 0; i < x.length; i++) {
      x[i].classList.add("invisible");
    }

    v[0].classList.remove("invisible");
  }

  async getAgeRecomendation(arr){
    for(let x of arr){
      this.age_recomendation.push(x.item_text);
      console.log(this.age_recomendation);
      // await this.api.getAgeRecomendationById(x).then(async(data) => {
      //   this.age_recomendation.push(data[0].name);
      //   console.log(this.age_recomendation);
      // }).catch(error => {
      //   console.log(error);
      // });
    }
  }

  async getGenderRecomendation(arr){
    for(let x of arr){
      await this.api.getGenderRecomendationById(x).then(async(data) => {
        this.gender_recomendation.push(data[0].name);
        console.log(this.gender_recomendation);
      }).catch(error => {
        console.log(error);
      });
    }
  }


  async openQuery(){
    const modal = await this.modalController.create({
      component: MenuComponent,
      cssClass: 'supportCss',
    });
    modal.onDidDismiss().then((dataReturned) => {
    });
    return await modal.present();
  }


  async getAssociatedTests() {
     await this.api.getAssociatedTests().then(async data => {
      // console.log(data);
      this.associated_tests = data;
    }).catch(error => {
      console.log(error);
    });
  }

  async getFacilities() {
     await this.api.getFacilities().then(async(data) => {
      // console.log(data);
      this.facilities = data;
    }).catch(error => {
      console.log(error);
    });
  }

  getReviews() {
    this.api.getReviews().then(data => {
      // console.log(data);
      this.reviews = data;
    }).catch(error => {
      console.log(error);
    });
  }

  async searchLabs(){
    this.util.show('Please wait....');
    this.secondary_labs =[];
    // localStorage.removeItem('addToBucket');
    // localStorage.removeItem('newBucketArray');
    // localStorage.removeItem('labsdata');
    let lat = localStorage.getItem('lat');
    let lng = localStorage.getItem('lng');
    await this.getAssociatedTest();
      await this.api.getSecondaryLabs().then(async(data) => {
        this.all_labs = data;
        let pincode = [];
        this.util.hide(); 
        for(let x of this.all_labs){
          let delivery_pincode = [];
          for (let y of x.delivery_pincode){
          if(y.item_text == this.pincode){
            // console.log('matched')
            this.secondary_labs.push(x)
          }
        }
      }

      await this.secondary_labs.forEach(async element =>{
        var price = 0;
        var selling_price = 0;
        var all_test_data= [];
        var all_test1_data= [];
        var available_test = [];
        var not_available_test = [];
        for (let x of this.associated_test){ 
        // console.log(x);
          if(x.branch_id == element.uid){
            // console.log('available data')
            all_test_data.push(x);
            available_test.push(x.itid.test_name);           
            price += x.price;
            selling_price += x.selling_price;
          }
        }

        for (let x of this.addToBucket){ 
        var is_available = false;
          for(var y of all_test_data){
            if(x == y.individual_test){ 
              is_available = true;
            }
          }
          if(is_available == false){
            all_test1_data.push(x);
          }
        }

        var test2data = [];

        for (let x of this.associated_tests){
          for(var y of all_test1_data){
            if(x.individual_test == y){
              test2data.push(x);
              not_available_test.push(x.itid.test_name);
            }
          }
        } 

        all_test1_data = test2data;
        var average_rating = 0;

        element.test_data = all_test_data;
        element.test1_data = all_test1_data;
        element.available_test = available_test;
        element.not_available_test = not_available_test;
        element.price = price;
        element.selling_price = selling_price;

        // console.log((lat +","+ lng+","+ element.lat+","+ element.lng));
        var distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
        // console.log(distance);
        element.distance = distance;

        var rating_array = [];
        // var average_rating =[];

        var facilities = [];

        for (let x of this.facilities){
          for (let y of element.facility){
            if(x.id == y){
              console.log(x);
              facilities.push(x);
            }  
         }
        }
        console.log(facilities);
        element.facilities = facilities;

        for (let x of this.reviews){
          if(x.lab_id == element.id){
            rating_array.push(x);
          }  
        }

        element.total_reviews = 0;
        if(rating_array.length>0){
          var avgrate = 0;
          var rating_length = rating_array.length;
            for(var x of rating_array){
              avgrate += (x.booking_exp+x.collection_process+x.price+x.result_quality+x.slot_timing)/5;
            }
          average_rating = avgrate/rating_length;
          element.total_reviews = rating_array.length;
        }

        element.average_rating = average_rating;
      });
      this.secondary_labs.sort( this.compare);
      var newSortedArray = [];
       for(let x of this.secondary_labs){
       
        newSortedArray.push({
          // accreditation: x.accreditation,
          address: x.address,
          available_test: x.available_test,
          cod: x.cod,
          cover: x.cover,
          distance:x.distance,
          price:x.price,
          selling_price:x.selling_price,
          total_reviews:x.total_reviews,
          // delivery_pincode:x.delivery_pincode,
          facilities: x.facilities,
          id: x.id,
          lat:x.lat,
          lng:x.lng,
          name:x.name,
          not_available_test:x.not_available_test,
          // phone:x.phone,
          primary:x.primarylab,
          logo:x.logo,
          range_price:x.range_price,
          service_delivery:x.service_delivery,
          test1_data:x.test1_data,
          test_data:x.test_data,
          free_charge: x.free_charge,
          page_slug:x.page_slug
        })
      }
      this.secondary_labs = newSortedArray;
       console.log(this.secondary_labs);
      localStorage.setItem('addToBucket',JSON.stringify(this.addToBucket));
      localStorage.setItem('newBucketArray',JSON.stringify(this.newBucketArray));
      // console.log()
      localStorage.setItem('labsdata', JSON.stringify(this.secondary_labs))
      this.router.navigate(['search-labs']);    
    })
     .catch(error => {
      this.util.hide(); 
      console.log(error);
    }); 
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    // console.log(lat1, lon1, lat2, lon2);
    const earthRadiusKm = 6371;

    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }


  compare( a, b ) {
    if ( a.distance < b.distance ){
      return -1;
    }
    if ( a.distance > b.distance ){
      return 1;
    }
    return 0;
  }

  getAssociatedTest(){
    this.associated_test = [];
    for(var i of this.addToBucket){
      // console.log(i)
      for(var x of this.associated_tests){
       if(x.individual_test == i)
          this.associated_test.push(x);
         // console.log(this.associated_test)
     }
    }
  }
}