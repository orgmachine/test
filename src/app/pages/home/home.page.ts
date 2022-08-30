import { Component, VERSION } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { Platform, ModalController, NavController, AlertController, MenuController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ProfileModalPage } from 'src/app/pages/profile-modal/profile-modal.page';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { orderBy, uniqBy } from 'lodash';
import * as moment from 'moment';
import {parse, stringify, toJSON, fromJSON} from 'flatted';

import * as $ from "jquery";
import Swal from 'sweetalert2';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  plt;
  banners: any[] = [];
  settings: any;
  isLoaded: boolean = false;
  mobile: any;
  isLogin: any; 

  row_1_banner: any = [];
  row_2_banner: any;
  row_3_col_1_banner: any;
  row_3_col_2_banner: any;

  slideOpts = {
    slidesPerView:4,
    pagination: true,
    autoplay: true,
    pager:true
  };
    slideOpts2 = {
    slidesPerView:4,
    pagination: true,
  autoplay: true,
    pager:true,
  spaceBetween:10
  };
   slideOpts3 = {
    slidesPerView:4,
    pagination: true,
  autoplay: true,
    pager:true,
  spaceBetween:10
  };
    slideOpts4 = {
    slidesPerView:4,
    pagination: true,
  autoplay: true,
    pager:true,
  spaceBetween:8
  };
   slideOpts5 = {
    slidesPerView:4,
    pagination: true,
  autoplay: true,
    pager:true,
  spaceBetween:10
  };
      slideOptsmob2 = {
    slidesPerView:1,
    pagination: true,
  autoplay: true,
    pager:true,
  spaceBetween:10
  };
   slideOptsmob3 = {
    slidesPerView:1,
    pagination: true,
  autoplay: true,
    pager:true,
  spaceBetween:10
  };
    slideOptsmob4 = {
    slidesPerView:1,
    pagination: true,
  autoplay: true,
    pager:true,
  spaceBetween:10
  };
   slideOptsmob5 = {
    slidesPerView:1,
    pagination: true,
  autoplay: true,
    pager:true,
  spaceBetween:10
  };
  users = [];
  labs = [];
  bookings = [];
  all_tests = [];
  all_pincodes = [];

  cities: any = [];
  states: any = [];
  all_test: any = [];
  all_labs: any = [];
  testLoad: boolean = false;
  pincodeLoad: boolean = false;
  terms: string = '';
  pincode: string = '';
  addToBucket: any = [];
  deliveries_pincode: any = [];
  habbits: any = [];
  risks: any = [];
  address:any;
  secondary_labs: any = [];
  associated_test: any=[];

  pushSecondaryLabs: any = [];
  finalLabs: any =[];
  reviews =[];
  facilities =[];
  associated_tests = [];
  primary_lab = [];
  total_lab = [];
  popular_tests: any = [];
  popular_packages: any = [];

  newBucketArray:any= [];
  cardiology_test: any = [];
  radiology_test: any = [];
  city = 'Angular ' + VERSION.major;
  profile: any;
  constructor(
    public geolocation: Geolocation,
    private router: Router,
    private api: ApisService,
    private util: UtilService,
    public modalController: ModalController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    public menu: MenuController,
    private http: HttpClient
  ) {
    // this.getAssociatedTests();
    this.getPrimaryLabs(); 
 this.getPopularTest();
    this.getPopularPackage();
    this.getFacilities();
    this.getReviews();
    //this.getCardiologyTest();
    //this.getRadiologyTest();
   // this.getAllSecondaryLabs();
    this.api.getStates().then(data => {
      this.states = data;
    }).catch(error => {
      console.log(error);
    });
    this.util.subscribeCityLocation().subscribe(data => {
      this.getCity(data);
    });
    this.util.subscribeStateLocation().subscribe(data => {
      this.getStateId(data);
    });
    this.util.subscribeQuery().subscribe(data => {
      this.openQuery();
    });
    this.menu.enable(true);
    this.mobile = localStorage.getItem('mobile');
    this.api.getCitiesForHome().then(data => {
      this.cities = data;
      console.log(this.cities)
    }).catch(error => {
      console.log(error);
    });
    this.api.getWebBanners().then(data => {
      for(let x of data){
        console.log(data)
        if(x.page_name == 'row_1') {
          this.row_1_banner.push(x);
          console.log(this.row_1_banner)
        } else if(x.page_name == 'row_2') {
          this.row_2_banner = x.banner;
          console.log(this.row_2_banner)
        }
        // } else if(x.page_name == 'row_3_col_1') {
        //   this.row_3_col_1_banner = x;
        // } else if(x.page_name == 'row_3_col_2') {
        //   this.row_3_col_2_banner = x;
        // }
      }
    }).catch(error => {
    console.log(error);
  });
    const uid = sessionStorage.getItem('uid');
    this.api.getMyProfile(uid).then((data) => {
      this.profile = data;
      console.log(this.profile);
      if(this.profile.name == ''){
        console.log(this.profile.name)
        this.openModal();
      }
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    }); 
}

  async openModal(){
    const modal = await this.modalController.create({
      component: ProfileModalPage,
      cssClass: 'profileCss',
      backdropDismiss:false,
    });
    modal.onDidDismiss().then((dataReturned) => {
    });
    return await modal.present();
  }

  getPrimaryLabs(){
    this.api.getPrimaryLab().then(data => {
      this.primary_lab = data;
      console.log(this.primary_lab)
    }).catch(error => {
      console.log(error);
    });
  }

  getLabsCount(){
    this.api.getLabCount().then(data => {
      this.total_lab = data;
      console.log(this.primary_lab)
    }).catch(error => {
      console.log(error);
    });
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
    await this.api.getFacilities().then(async(data) => {
      console.log(data);
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


  async getPopularTest(){
    await this.api.getHomeIndividualPopularTest().then(async(data) => {
      this.popular_tests = data;
      if(data.length > 0){
        this.popular_tests.forEach((element)=>{
          element.mrp = (element.mrp == undefined ? 0 : element.mrp);
          element.labs = (element.labs == undefined ? 0 : element.labs);
          element.price = (element.price == undefined ? 0 : element.price);
        });
      }
      console.log(this.popular_tests)
    }).catch(error => {
      console.log(error);
    });
  }

  async getPopularPackage(){
    await this.api.getMostPopularPackage().then(async(data) => {
      this.popular_packages = data;
      if(data.length > 0){
        this.popular_packages.forEach((element)=>{
          element.mrp = (element.mrp == undefined ? 0 : element.mrp);
          element.labs = (element.labs == undefined ? 0 : element.labs);
          element.price = (element.price == undefined ? 0 : element.price);
        });
      }
      console.log(this.popular_packages)
    }).catch(error => {
      console.log(error);
    });
  }
  
  getCardiologyTest(){
    this.api.getCardiologyTest().then(data => {
      this.cardiology_test = data;
      // console.log(this.cardiology_test)
    }).catch(error => {
      console.log(error);
    });
  }
  
  getRadiologyTest(){
    this.api.getRadiologyTest().then(data => {
      this.radiology_test = data;
    }).catch(error => {
      console.log(error);
    });
  }

  getBookings() {
    this.api.getAllBookings().then((data) => {
      this.bookings = data;
            // console.log(this.bookings)
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  getAllSecondaryLabs() {
    this.api.getAllSecondaryLabs().then((data) => {
      this.labs = data;
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  getAllTest() {
    this.api.getAllTest().then(data => {
      this.all_tests = data;
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  getAllPincodes() {
    this.api.getAllPincodes().then(data => {
      this.all_pincodes = data;
      // console.log(this.all_pincodes)
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  // doRefresh(event) {
  //   this.ionViewWillEnter();
  //   this.ngOnInit()
  //   setTimeout(() => {
  //     event.target.complete();
  //   }, 700);
  // }

  ionViewWillEnter(){
    this.addToBucket = [];
    this.newBucketArray = [];
    this.pincode = '';
    this.terms = '';
    this.getLocation();
    this.isLogin = sessionStorage.getItem('loginStatus');
    this.api.getIndividualTest().then(data => {
      this.all_test = data;
    }).catch(error => {
      console.log(error);
    }); 
    
    this.api.getSecondaryLabs().then(data => {
      this.all_labs = data;
    }).catch(error => {
      console.log(error);
    }); 
  }

  ngOnInit(){
   this.getBookings();
   this.getAllPincodes();
    this.getAllTest();
	 this.getLabsCount();
    this.api.getHealthHabbits().then(data => {
      this.habbits = data;
    }).catch(error => {
      console.log(error);
    }); 
    this.api.getHealthRisk().then(data => {
      this.risks = data;
    }).catch(error => {
      console.log(error);
    }); 
	
  }

  onInput($event,value) {
    console.log(value)
    if(value == 'test'){
      this.testLoad = true;
      this.pincodeLoad = false;
      if ($event.detail == null && this.terms == '') {
        this.testLoad = false;
      }
    } else {
      this.pincodeLoad = true;
      this.testLoad = false;
      if ($event.detail == null && this.pincode == '') {
        this.pincodeLoad = false;
      }
    }
  }

  onCancel($event,value) {
    if(value == 'test') {
    this.testLoad = false;
    } else {
      this.pincodeLoad = false;
    }
  }

  select(data){
    console.log(data)
    this.pincode = data.pincode;
    localStorage.setItem('pincode',this.pincode)
    this.pincodeLoad = false;
  }

  add(data){
    this.terms = '';
    this.testLoad = false;
    console.log(this.addToBucket.length)
    if(this.addToBucket.length == 0){
      this.newBucketArray.push(data.test_name)
      this.addToBucket.push(data.id)
      console.log(this.newBucketArray, this.addToBucket)
    } else {
      var a = this.addToBucket.indexOf(data.id);
      if(a == 0 ){
        this.util.showToast('Test already selected','primary','middle')
      } else if(a == -1) {
        this.newBucketArray.push(data.test_name)
        this.addToBucket.push(data.id)
        console.log(this.newBucketArray, this.addToBucket)
      } else{
        this.util.showToast('Test already selected','primary','middle')
      }
    }
  }

  remove(index){
    this.newBucketArray.splice(index,1);
    this.addToBucket.splice(index,1);
    localStorage.setItem('newBucketArray',this.newBucketArray)
    localStorage.setItem('addToBucket',this.addToBucket)
    if(this.addToBucket.length == 0){
      this.testLoad = false;
    }
  }

  getLocation() {
    console.log('1')
    this.geolocation.getCurrentPosition().then((resp) => {
      localStorage.setItem('lat', resp.coords.latitude.toString());
      localStorage.setItem('lng', resp.coords.longitude.toString());
      this.getAddress(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   // console.log('live update', data);
    //   localStorage.setItem('lat', data.coords.latitude.toString());
    //   localStorage.setItem('lng', data.coords.longitude.toString());
    //   this.getAddress(data.coords.latitude, data.coords.longitude);
    // });
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

  getAddress(lat, lng) {
    // console.log(lat,lng)
    let geocoder = new google.maps.Geocoder();
    let location = new google.maps.LatLng(lat, lng);
    geocoder.geocode({ 'location': location }, (results, status) => {    
      // console.log(results)
      this.address = results[0].formatted_address; 
      // console.log(this.address);  
      localStorage.setItem('address', results[0].formatted_address);
      let city;
      let state;
      let pincode;
       for (var i=0; i<results[0].address_components.length; i++) {
          for (var b=0;b<results[0].address_components[i].types.length;b++) {
            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
            if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
                //this is the object you are looking for
                city= results[0].address_components[i];
                break;
            }
            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                //this is the object you are looking for
                state= results[0].address_components[i];
                break;
            }
            if (results[0].address_components[i].types[b] == "postal_code") {
              //this is the object you are looking for
              pincode= results[0].address_components[i];
              console.log(pincode)
              break;
          }
          }
        }
        let current_pincode = pincode.short_name;
        //city data
        let current_city = city.short_name;
        let current_state = state.long_name;
        this.getCity(current_city);
        this.getStateId(current_state);
        localStorage.setItem('current_pincode', current_pincode);
        localStorage.setItem('current_city', current_city);
        localStorage.setItem('current_state', current_state);
        console.log('trigger event')
        this.util.publishCityLocation(current_city);
        this.util.subscribeCity().subscribe(data => {
          console.log(data)
          this.getCity(data)
        });
    });
  }

  getCity(data){
    this.api.getCityByCityName(data).then((data) => {
      // console.log(data);
      if (data && data.length) {
        this.getPincode(data[0].id);
      }
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  getPincode(id){
    this.deliveries_pincode = [];
    this.pincodeLoad = false;
    this.api.getPincodeByCityId(id).then((data) => {
      // console.log(data);
      if (data && data.length) {
        console.log(data)
        this.deliveries_pincode = data; 
      }
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  getStateId(state){
    // console.log(state)
    for(let x of this.states){
      if(x.name == state){
        // console.log(x.id)
        localStorage.setItem('state_id', x.id);
      }
    }
  }

  /*book(data){
    this.addToBucket.push(data.id);
    this.newBucketArray.push(data.test_name)
    localStorage.setItem('addToBucket',this.addToBucket);
    localStorage.setItem('newBucketArray',this.newBucketArray);
    this.pincode = localStorage.getItem('pincode');
    if(this.pincode == undefined){
      this.pincode = localStorage.getItem('current_pincode');
    }
    this.searchLabs2();
  }*/


  book(data){
   var prdexist = false;
   if(this.addToBucket.length > 0){
    for(var x of this.addToBucket){
        if(x == data.id){
          prdexist = true;
        }
      }
    }
    if(prdexist == false){
      this.util.showToast('Test added in search bar, Please enter your pincode','primary','middle');
      this.addToBucket.push(data.id);
      this.newBucketArray.push(data.test_name)
      localStorage.setItem('addToBucket',this.addToBucket);
      localStorage.setItem('newBucketArray',this.newBucketArray);
    }else{
      this.util.showToast('Test already selected in search bar, Please enter your pincode','danger','middle');
    }
    this.pincode = localStorage.getItem('pincode');
    if(this.pincode == undefined){
      this.pincode = localStorage.getItem('current_pincode');
    }

    console.log(this.addToBucket)
    console.log(this.newBucketArray)
   // this.searchLabs2();
  }

  async searchLabs2(){
      if (this.addToBucket.length === 0) {
      this.util.showToast('Select your test', 'danger', 'middle');
      return false;
    } else if (this.pincode === '' || this.pincode == null) {
      this.util.showToast('Pincode is required', 'danger', 'middle');
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
 
  async searchLabs5(){
    await this.api.getSecondaryLabsByPin(this.pincode).then(async(data) => {
      console.log(data);
      this.secondary_labs = data;
      this.associated_test = [];
      if(data){
        var i = 1;
        await this.secondary_labs.forEach(async element =>{
        var j = 1;
          for(var y of this.addToBucket){
            await this.api.getAssociatedTestByProductAndBranch(element.uid,y).then(async(data1) => {
              console.log(data1);
              if(data1.length > 0){
                this.associated_test.push(data1[0]);
                console.log(i +"=="+ this.secondary_labs.length +"&&"+ j +"=="+ this.addToBucket.length)
                if(i == this.secondary_labs.length && j == this.addToBucket.length){
                    await this.searchLabs3();                  
                }
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
    if (this.addToBucket.length === 0) {
      this.util.showToast('Select your test', 'danger', 'bottom');
      return false;
    } else if (this.pincode === '') {
      this.util.showToast('Pincode is required', 'danger', 'bottom');
      return false;
    }
      this.util.show('Please wait....');
      let lat;
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
    }

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

          var distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
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
      var jsonString = stringify(arr);
      localStorage.setItem('labsdata', jsonString);
      localStorage.setItem('newBucketArray',stringify(this.newBucketArray))
      localStorage.setItem('addToBucket',stringify(this.addToBucket))
      this.util.hide();
      this.router.navigate(['search-labs']);
  }


  async searchLabs(){
     if (this.addToBucket.length === 0) {
      this.util.showToast('Select your test', 'danger', 'bottom');
      return false;
    } else if (this.pincode === '') {
      this.util.showToast('Pincode is required', 'danger', 'bottom');
      return false;
    }
      this.util.show('Please wait....');
      this.secondary_labs = [];
      let lat;
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
    }

     await this.getAssociatedTest();
     await this.api.getSecondaryLabs().then(async(data) => {
      this.all_labs = data;
      let pincode = [];
      this.util.hide(); 
      for(let x of this.all_labs){
        let delivery_pincode = [];
        for (let y of x.delivery_pincode){
          console.log(y.item_text, '== ',this.pincode)
          if(y.item_text == this.pincode){
            this.secondary_labs.push(x)
          }
        }
      }
      console.log(this.secondary_labs)

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

          var distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
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
      localStorage.setItem('labsdata', jsonString);
      localStorage.setItem('newBucketArray',stringify(this.newBucketArray))
      localStorage.setItem('addToBucket',stringify(this.addToBucket))
      this.router.navigate(['search-labs']);
    }).catch(error => {
      this.util.hide(); 
      console.log(error);
    }); 
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
  
  async openQuery(){
    const modal = await this.modalController.create({
      component: MenuComponent,
      cssClass: 'supportCss',
    });
    modal.onDidDismiss().then((dataReturned) => {
    });
    return await modal.present();
  } 

  showAllTests(){
    this.router.navigate(['tests']);
  }

  showAllPackages(){
    this.router.navigate(['health-packages']);
  }

  goToDetail(data){
    localStorage.setItem('testid',data.id)
    localStorage.setItem('testname',data.test_name)
    this.router.navigate(['test',data.page_slug])
  }

  
  viewRisk(data){
    localStorage.setItem('riskid',data.id)
    this.router.navigate(['risk',data.name])
  }
  viewHabit(data){
    localStorage.setItem('habitid',data.id)
    this.router.navigate(['habit',data.name])
  }
  goToCardiology(){
    this.router.navigate(['cardiology'])
  }
  goToRadiology(){
    this.router.navigate(['radiology'])
  }
}