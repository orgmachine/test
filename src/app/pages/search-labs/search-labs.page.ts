import { Component, ViewChild } from '@angular/core';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { UtilService } from 'src/app/services/util.service';
import { ProfileModalPage } from 'src/app/pages/profile-modal/profile-modal.page';
import {parse, stringify, toJSON, fromJSON} from 'flatted';
declare var google: any;

@Component({
  selector: 'app-search-labs',
  templateUrl: './search-labs.page.html',
  styleUrls: ['./search-labs.page.scss'],
})
export class SearchLabsPage {
  @ViewChild('placesRef', { static: false }) placesRef: GooglePlaceDirective;
  terms: string = '';
  settings: any;
  isLogin: any;
  labs: any = [];

  address: any;
  latitude: any;
  longitude: any;
  all_test: any = [];
  testLoad: boolean = false;
  pincode: any;
  addToBucket: any = [];
  newBucketArray:any= [];
  secondary_labs: any = [];
  associated_test: any=[];

  pushSecondaryLabs: any = [];
  finalLabs: any =[];
  reviews =[];
  facilities =[];
  associated_tests = [];
  primary_lab = [];
  all_labs: any = [];
  profile:any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
    public modalController: ModalController,
    private api: ApisService,
    private util: UtilService,
	public menu: MenuController
  ) { 
    this.getProfile();
    this.util.observeProfile().subscribe(data => {
      console.log(data)
      this.getProfile();
    });

    this.labs = parse(localStorage.getItem('labsdata'));
    console.log(this.labs)

    console.log(this.labs) 
    this.getFacilities();

    if(this.labs.length == 0){
      this.newBucketArray = parse(localStorage.getItem('newBucketArray'))
      this.addToBucket = parse(localStorage.getItem('addToBucket'))
      
      // this.getAssociatedTests();
      this.getReviews();
      this.api.getIndividualTest().then(data => {
        this.all_test = data;
      }).catch(error => {
        console.log(error);
      }); 
    }else{
      console.log(this.labs)
      for(var x of this.labs){
        // this.api.getPrimaryLabById(x.primary).then( data => {
        //    console.log(data);
        //     x.primary_logo = data[0].logo;
        //     console.log(x)
        //   }).catch(error => {
        //     console.log(error);
        // });
      }
    }
    console.log(localStorage.getItem('newBucketArray'));
    this.util.hide(); 
  }
  getAlltest(){
    this.api.getIndividualTest().then(data => {
      this.all_test = data;
    }).catch(error => {
      console.log(error);
    }); 
  }

  modify(){
    this.getAlltest();
    this.labs = [];
    this.newBucketArray = parse(localStorage.getItem('newBucketArray'));
    this.addToBucket = parse(localStorage.getItem('addToBucket'));
    console.log(this.newBucketArray);
    console.log(this.addToBucket)
    localStorage.setItem('cartdata',stringify({}));
  }

  async getAssociatedTests() {
     await this.api.getAssociatedTests().then(async data => {
      console.log(data);
      this.associated_tests = data;
    }).catch(error => {
      console.log(error);
    });
  }

  async getFacilities() {
    console.log('I am in');
     await this.api.getFacilities().then(async(data) => {
      console.log(data);
      this.facilities = data;
    }).catch(error => {
      console.log(error);
    });
  }

  getReviews() {
    this.api.getReviews().then(data => {
      console.log(data);
      this.reviews = data;
    }).catch(error => {
      console.log(error);
    });
  }
  add(data){
    this.terms='';
    this.testLoad = false;
    if(this.addToBucket.length == 0){
      this.newBucketArray.push(data.test_name);
      this.addToBucket.push(data.id);
    } else {
      var a = this.addToBucket.indexOf(data.id);
      if(a == 0 ){
        this.util.showToast('Already added in the Bucket','primary','top')
      } else if(a == -1) {
        this.newBucketArray.push(data.test_name)
        this.addToBucket.push(data.id)
        console.log(this.newBucketArray, this.addToBucket)
      } else{
        this.util.showToast('Already in the bucket','primary','top')
      }
    }
  }

  remove(index){
    this.newBucketArray.splice(index,1);
    this.addToBucket.splice(index,1);
    if(this.addToBucket.length == 0){
      this.testLoad = false;
    }
  }
  onInput(ev){
    console.log(ev)
    this.testLoad = true;
  }
  book(data){
    console.log(data);
    this.isLogin = sessionStorage.getItem('loginStatus');
    localStorage.setItem('cartdata',stringify(data))
       let price= [];
      price = data.range_price;
      let maxd = [];
        for(let y of price){
          maxd.push(y.to);
        }
        var max = maxd.reduce(function(a, b) {
            return Math.max(a, b);
        });
        if(data.distance > max){
          console.log(max)
          this.showAlert(data);
        } else { 
          if(this.isLogin=='true'){
            if(this.profile.name == ''){
              this.openModal();
            } else {
              this.router.navigate(['cart'])
            }
          } else {
            this.showLoginModal();
            return false;
          }
        }
    // this.isLogin = localStorage.getItem('loginStatus');
    //   if(this.isLogin=='true'){
    //   this.router.navigate(['cart'])
    // } else {
    //   this.showLoginModal();
    //   return false;
    // }
  }
  async showAlert(data){
    const alert = await this.alertCtrl.create({
      header: 'Sorry',
      backdropDismiss: true, 
      message: data.name+' is to far from your location. Please try to change your location and book again. Thank You',
      cssClass: 'loginAlert',
      buttons: [
        {
          text: 'No, Thanks',
          cssClass: 'signup',
          handler: (data) => {
            this.router.navigate(['/register']);
          }
        }, 
        {
          text: 'Change Location',
          cssClass: 'signin',
          handler: (data) => {
            this.modify(); 
          }
        }
      ]
    });
    await alert.present();
  }
  getProfile(){
    const uid = sessionStorage.getItem('uid');
    console.log(uid)
    this.api.getMyProfile(uid).then((data) => {
      this.profile = data;
      console.log(this.profile);
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    }); 
  }

  async showLoginModal(){
    const modal = await this.modalController.create({
      component: SigninComponent,
      cssClass: 'login-modal-css',
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned)
      if(dataReturned.data !== undefined){
        console.log(this.profile.name)
        if(this.profile.name == ''){
          console.log(this.profile.name)
          this.openModal();
        } else {
          this.router.navigate(['cart'])
        }
      } else {
        console.log()
      }
    });
    return await modal.present();
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: ProfileModalPage,
      cssClass: 'profileCss',
      backdropDismiss:false,
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned)
      // if(dataReturned.data !== undefined){
        if(this.profile.name == ''){
          console.log('ify')
          console.log(this.profile.name)
          this.getProfile();
        } else {
          console.log('ele')
          this.router.navigate(['cart'])
        }
      // } else {
      //   console.log()
      // }
    });
    return await modal.present();
  }

  onCancel(ev) {
    this.testLoad = false;
  }

  lab(item){
    console.log('lab',item);
   localStorage.setItem('labid',item.id)
    this.router.navigate(['diagnostic-lab',item.page_slug]);
  }

  async handleAddressChange(ev: any){
    console.log(ev)
     let pincode;
     for (var i=0; i<ev.address_components.length; i++) {
        for (var b=0;b<ev.address_components[i].types.length;b++) {
          if (ev.address_components[i].types[b] == "postal_code") {
              //this is the object you are looking for
              pincode= ev.address_components[i];
              console.log(pincode)
              break;
          }
        }
      }
      let current_pincode = pincode.short_name;
      this.pincode = current_pincode;
      console.log(this.pincode);
      localStorage.setItem('pincode',this.pincode)
      const geocoder = new google.maps.Geocoder;
      geocoder.geocode({ address: ev.formatted_address }, (results, status) => {
        console.log(results, status);
        if (status === 'OK' && results && results.length) {
          this.latitude = results[0].geometry.location.lat();
          this.longitude = results[0].geometry.location.lng();
          console.log('----->', this.latitude, this.longitude, this.pincode);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
          return false;
        }
      });
  }

 async searchLabs2(){
    console.log(this.pincode);
    await this.api.getSecondaryLabsByPin(this.pincode).then(async(data) => {
      this.secondary_labs = data;

      console.log(this.secondary_labs);
      console.log(this.addToBucket);
      this.associated_test = [];
      if(data){
        var i = 1;
        await this.secondary_labs.forEach(async element =>{
          await this.api.getVenueDetails(element.primarylab).then(async(data6) => {
                  if(data6){
                   element.primarylabdata= data6;
                   element.primarylogo= data6.logo;
                  }
                }).catch(error => {
                  this.util.hide(); 
                  console.log(error);
                });
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
      }
    }).catch(error => {
      this.util.hide(); 
      console.log(error);
    });

  }

 async searchLabs3(){
    this.util.show('Please wait....');
     let lat = this.latitude;
     let lng = this.longitude;

     console.log(this.associated_test);
     this.associated_test.push({});

    await this.secondary_labs.forEach(async element =>{
        // console.log(element);

          var price = 0;
          var selling_price = 0;
          var all_test_data= [];
          var all_test1_data= [];
          var available_test = [];
          var not_available_test = [];
          for (let x of this.associated_test){ 
            if(x.branch_id == element.uid){
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
          let difference = this.newBucketArray.filter(x => !available_test.includes(x));
          not_available_test.push(difference);
          test2data.push(difference);
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

          var distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
          // console.log(distance);
          element.distance = distance;

          var rating_array = [];

          var facilities = [];
          console.log(this.facilities)
          for (let x of this.facilities){
            for (let y of element.facility){
              if(x.id == y){
                facilities.push(x);
              }  
           }
          }

          element.facilities = facilities;
          console.log(facilities)

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

      this.labs = newSortedArray;
      let arr = [];
      console.log('this.labs',this.labs);
      for(let x of this.labs){
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
          lat:x.lat,
          lng:x.lng,
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
      console.log("arr",arr)
      
      var jsonString = stringify(arr);

     // console.log(this.labs);
     // var jsonString = JSON.stringify(this.labs);
      // console.log(jsonString);
      localStorage.setItem('labsdata', jsonString);
       console.log(this.addToBucket);
       console.log(this.newBucketArray);
      localStorage.setItem('newBucketArray',stringify(this.newBucketArray))
      localStorage.setItem('addToBucket',stringify(this.addToBucket));
      this.util.hide();
      // this.router.navigate(['search-labs']);
  }


  async searchLabs(){
     this.util.show('Please wait....');

     let lat = this.latitude;
     let lng = this.longitude;

     await this.getAssociatedTest();
     await this.api.getSecondaryLabs().then(async(data) => {
       console.log(data);
      this.all_labs = data;
      let pincode = [];
      this.util.hide(); 
      for(let x of this.all_labs){
        console.log(x)
        let delivery_pincode = [];
        for (let y of x.delivery_pincode){
          if(y.item_text == this.pincode){
            console.log('matched')
            this.secondary_labs.push(x)
          }
        }
      }

      await this.secondary_labs.forEach(async element =>{
        // console.log(element);

          var price = 0;
          var selling_price = 0;
          var all_test_data= [];
          var all_test1_data= [];
          var available_test = [];
          var not_available_test = [];
          for (let x of this.associated_test){ 
          console.log(x);
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

          let difference = this.newBucketArray.filter(x => !available_test.includes(x));
          not_available_test.push(difference);
          test2data.push(difference);

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

          var distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
          // console.log(distance);
          element.distance = distance;

          var rating_array = [];

          var facilities = [];

          for (let x of this.facilities){
            for (let y of element.facility){
              if(x.id != y){
                facilities.push(x);
              }  
           }
          }

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
      for(var x of this.secondary_labs){
        if(x.test_data.length > 0){
          newSortedArray.push(x);
        }
      }
      this.labs = newSortedArray;
      let arr = []
      for(let x of this.labs){
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
          lat:x.lat,
          lng:x.lng,
          name:x.name,
          lab_timings:x.lab_timings,
          not_available_test:x.not_available_test,
          logo:x.logo,
          range_price:x.range_price,
          service_delivery:x.service_delivery,
          test1_data:x.test1_data,
          test_data:x.test_data,
          free_charge: x.free_charge,
          page_slug:x.page_slug
        })
      }
      var jsonString = stringify(arr);

     // console.log(this.labs);
     // var jsonString = JSON.stringify(this.labs);
      console.log(jsonString);
      localStorage.setItem('labsdata', jsonString);
       console.log(this.addToBucket);
       console.log(this.newBucketArray);
      localStorage.setItem('newBucketArray',stringify(this.newBucketArray))
      localStorage.setItem('addToBucket',stringify(this.addToBucket))
      //localStorage.setItem('labsdata', stringify(this.labs))
     // this.router.navigate(['search-labs']);    
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
    console.log(lat1, lon1, lat2, lon2);
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
      console.log(i)
      for(var x of this.associated_tests){
       if(x.individual_test == i)
          this.associated_test.push(x);
         console.log(this.associated_test)
     }
    }
  }

}