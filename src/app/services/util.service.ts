import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subject,BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loader: any;
  isLoading = false;

  details: any;

  private address = new Subject<any>();
  private coupon = new Subject<any>();
  private review = new Subject<any>();
  orders: any;

  private changeLocation = new Subject<any>();

  private changeOrderStatus = new Subject<any>();

  private loggedIn = new Subject<any>();

  private loggedInStatus = new Subject<any>();

  private badge = new Subject<any>();

  private city = new Subject<any>();

  private cityList = new Subject<any>();

  private query = new Subject<any>();

  private profile = new Subject<any>();

  private wallet = new Subject<any>();

  private cityLocation = new Subject<any>();

  private stateLocation = new Subject<any>();

  constructor(
    public loadingCtrl: LoadingController,
    private adb: AngularFirestore,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public router: Router,
    private navCtrl: NavController,
    private translateService: TranslateService
  ) {
  }
  /*
  Start Loader
  Call this method to Start your Loader
  */

  publishCityLocation(data) {
    this.cityLocation.next(data);
  }
  subscribeCityLocation(): Subject<any> {
    return this.cityLocation;
  }

  publishStateLocation(data) {
    this.stateLocation.next(data);
  }
  subscribeStateLocation(): Subject<any> {
    return this.stateLocation;
  }


  publishAddress(data: any) {
    this.address.next(data);
  }

  publishReview(data: any) {
    this.review.next(data);
  }

  publishProfile(data: any) {
    this.profile.next(data);
  }

  observeProfile(): Subject<any> {
    return this.profile;
  }
  getLanguage() {
    return this.translateService.currentLang;
  }

  publishBadge(data) {
    this.badge.next(data);
  }
  subscribeBadge(): Subject<any> {
    return this.badge;
  }

  publishCity(data) {
    this.city.next(data);
  }
  subscribeCity(): Subject<any> {
    return this.city;
  }  
  publishCityList(data) {
    this.cityList.next(data);
  }
  subscribeCityList(): Subject<any> {
    return this.cityList;
  }

  publishQuery(data) {
    this.query.next(data);
  }
  subscribeQuery(): Subject<any> {
    return this.query;
  }

  getReviewObservable(): Subject<any> {
    return this.review;
  }

  publishLocation(data) {
    this.changeLocation.next(data);
  }
  subscribeLocation(): Subject<any> {
    return this.changeLocation;
  }

  publishOrderStatus(data) {
    this.changeOrderStatus.next(data);
  }
  subscribeOrderStatus(): Subject<any> {
    return this.changeOrderStatus;
  }

  publishLoggedIn(data) {
    this.loggedIn.next(data);
  }
  subscribeLoggedIn(): Subject<any> {
    return this.loggedIn;
  }
  publishLoggedInStatus(data) {
    this.loggedInStatus.next(data);
  }
  subscribeLoggedInStatus(): Subject<any> {
    return this.loggedInStatus;
  }

  publishWalletStatus(data) {
    this.wallet.next(data);
  }
  subscribeWalletStatus(): Subject<any> {
    return this.wallet;
  }

  translate(str) {
    const currentLang = this.translateService.currentLang;
    const returnValue = this.translateService.translations[currentLang][str];
    if (returnValue === undefined) {
      return this.translateService.translations.en_merch[str];
    } else {
      return returnValue;
    }
  }
  translateInEN(str) {
    const currentLang = 'en';
    const returnValue = this.translateService.translations[currentLang][str];
    if (returnValue === undefined) {
      return this.translateService.translations.en_merch[str];
    } else {
      return returnValue;
    }
  }

  getCurrencyCode() {
    return environment.general.code;
  }

  getCurrecySymbol() {
    return environment.general.symbol;
  }

  getObservable(): Subject<any> {
    return this.address;
  }

  publishCoupon(data: any) {
    this.coupon.next(data);
  }
  getCouponObservable(): Subject<any> {
    return this.coupon;
  }

  setOrders(data) {
    this.orders = null;
    this.orders = data;
  }

  gerOrder() {
    return this.orders;
  }
  async show(msg?) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg,
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  /*
    Show Warning Alert Message
    param : msg = message to display
    Call this method to show Warning Alert,
    */
  async showWarningAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showSimpleAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: '',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showLoginAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Hold on!',
      backdropDismiss: true, 
      message: 'You must me logged in before report an issue. It will take not more than 30 seconds.',
      cssClass: 'loginAlert',
      buttons: [
        // {
        //   text: 'SIGNUP',
        //   cssClass: 'signup',
        //   handler: (data) => {
        //     this.router.navigate(['/register']);
        //   }
        // }, 
        {
          text: 'SIGNIN',
          cssClass: 'signin',
          handler: (data) => {
            this.router.navigate(['/login']); 
          }
        }
      ]
    });
    await alert.present();
  }

  /*
   Show Error Alert Message
   param : msg = message to display
   Call this method to show Error Alert,
   */
  async showErrorAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*
     param : email = email to verify
     Call this method to get verify email
     */
  async getEmailFilter(email) {
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (!(emailfilter.test(email))) {
      const alert = await this.alertCtrl.create({
        header: 'Warning',
        message: 'Please enter valid email',
        buttons: ['OK']
      });
      await alert.present();
      return false;
    } else {
      return true;
    }
  }


  /*
    Show Toast Message on Screen
     param : msg = message to display, color= background 
     color of toast example dark,danger,light. position  = position of message example top,bottom
     Call this method to show toast message
     */

  async showToast(msg, colors, positon) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: colors,
      position: positon
    });
    toast.present();
  }
  async showNotification(msg, colors, positon) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      color: colors,
      position: positon,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async errorToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  apiErrorHandler(err) {
    // console.log('Error got in service =>', err)
    if (err.status === -1) {
      this.showErrorAlert('Failed To Connect With Server');
    } else if (err.status === 401) {
      this.showErrorAlert('Unauthorized Request!');
      this.navCtrl.navigateRoot('/login');
    } else if (err.status === 500) {
      this.showErrorAlert('Somethimg Went Wrong..');
    }
  }

  // setDetails(data) {
  //   this.details = null;
  //   this.details = data;
  // }
  // getDetails() {
  //   return this.details;
  // }

  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


}