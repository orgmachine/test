import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export class AuthInfo {
  constructor(public $uid: string) { }

  isLoggedIn() {
    return !!this.$uid;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  isSignedIn: boolean=false;
  static UNKNOWN_USER = new AuthInfo(null);
  db = firebase.firestore();
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(ApisService.UNKNOWN_USER);
  constructor(
    private fireAuth: AngularFireAuth,
    private adb: AngularFirestore,
    private http: HttpClient
  ) { }

  public checkAuth() {
    return new Promise((resolve, reject) => {
      this.fireAuth.auth.onAuthStateChanged(user => {
        console.log(user);
        if (user) {
          sessionStorage.setItem('uid', user.uid);
          resolve(user);
        } else {
          this.logout();
          const lng = localStorage.getItem('language');
          const selectedCity = localStorage.getItem('selectedCity');
          localStorage.clear();
          localStorage.setItem('language', lng);
          localStorage.setItem('selectedCity', selectedCity);
          resolve(false);
        }
      });
    });
  }

  public login(email: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            this.db.collection('users').doc(res.user.uid).update({
              fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
            });
            this.authInfo$.next(new AuthInfo(res.user.uid));
            resolve(res.user);
          }
        })
        .catch(err => {
          this.authInfo$.next(ApisService.UNKNOWN_USER);
          reject(`login failed ${err}`);
        });
    });
  }

  public getOnboarding(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('splash').get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getUsers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('users',ref=>ref.orderBy('createdOn','desc')).get().subscribe((users) => {
        let data = users.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getCities(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('cities',ref=>ref.where('status', '==', 1)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getCitiesForHome(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('cities',ref=>ref.where('status', '==', 1).where('home_page', '==', '1')).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getPincodeById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('pincodes',ref=>ref.where('pincode', '==', id)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAssociatedTestPin(itid,pin): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('associated_tests_pin',ref=>ref.where('itid', '==', itid).where('pin', '==', pin)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          if(item.it){
            item.it.get().then(function (doc) {
              item.it = doc.data();
            });
          }
          if(item.branch){
            item.branch.get().then(function (doc) {
              item.branch = doc.data();
            });
          }
          if(item.at){
            item.at.get().then(function (doc) {
              item.at = doc.data();
            });
          }
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAllPincodes(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('pincodes').get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAllSecondaryLabs(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('venue',ref=>ref.where('type', '==', 'secondary')).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getCityByPincodeId(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('cities',ref=>ref.where('status', '==', 1).where('id', '==', id)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getPincodeByCityId(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('pincodes',ref=>ref.where('status', '==', 1).where('cityid', '==', id)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getCityByCityName(name): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('cities',ref=>ref.where('status', '==', 1).where('city', '==', name)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getStateByCityId(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('states',ref=>ref.where('status', '==', 1).where('id', '==', id)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAboutUs(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('aboutus').get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getTeamMember(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('team').get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getTeamMemberById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('team',ref=>ref.where('id', '==', id)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getCitiesByStateId(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('cities',ref=>ref.where('status', '==', 1).where('state', '==', id)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getStates(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('states',ref=>ref.where('status', '==', 1)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getClients(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('cities',ref=>ref.where('status', '==', 1)).get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getSocieties(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('society').get().subscribe((venue: any) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public selfRegistration(id,param): Promise<any> {
    console.log(param)
    return new Promise<any>((resolve, reject) => {
      this.db.collection('users').doc(id).set(param).then((data) => {
        resolve(data)
        })
        .catch(err => {
          this.authInfo$.next(ApisService.UNKNOWN_USER);
          reject(`login failed ${err}`)
        });
    });
  }

  public register(mobile:string, email: string, password: string, uid: string): Promise<any> {
    console.log(mobile,email,password,uid)
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            this.db.collection('users').doc(res.user.uid).set({
              uid: res.user.uid,
              email: email,
              createdOn: new Date(),
              phone: mobile,
              deviceId: uid,
              imagePath: '',
              type: 'user',
              status: 'active',
              fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
            });
            this.authInfo$.next(new AuthInfo(res.user.uid));
            resolve(res.user);
          }
        })
        .catch(err => {

          this.authInfo$.next(ApisService.UNKNOWN_USER);
          reject(`login failed ${err}`)
        });
    });
  }

  public resetPassword(email: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.sendPasswordResetEmail(email)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(`reset failed ${err}`);
        });
    });
  }

  public logout(): Promise<void> {
    this.authInfo$.next(ApisService.UNKNOWN_USER);
    // this.db.collection('users').doc(localStorage.getItem('uid')).update({ "fcm_token": firebase.firestore.FieldValue.delete() })
    return this.fireAuth.auth.signOut();
  }

  public getUser(phone): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('users',ref=>ref.where('phone', '==', phone)).get().subscribe((users: any) => {
        let data = users.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getMyProfile(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('users').doc(id).get().subscribe((users: any) => {
        resolve(users.data());
      }, error => {
        reject(error);
      });
    });
  }

  public addPrescription(id,param){
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('prescriptions').doc(id).set(param).then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public addMember(id,param){
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('members').doc(id).set(param,{merge:true}).then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

    // satya code

  public getReviewsByLabId(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('review',ref=>ref.where('status','==',1).where('lab_id','==',id)).get().subscribe((venue: any) => {
        // resolve(venue.data());
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          item.lab.get().then(function (doc) {
            item.lab = doc.data();
          });
         /* item.booking.get().then(function (doc) {
            item.booking = doc.data();
          });*/
          if(item.user !=''){
             item.user.get().then(function (doc) {
            item.user = doc.data();
            });
          }
         
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  } 

  public getReviews(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('review',ref=>ref.where('status','==',1)).get().subscribe((venue: any) => {
        // resolve(venue.data());
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  } 


  public getAssociatedTests(): Promise<any> {
      return new Promise<any>((resolve, reject) => {
        this.adb.collection('associated_tests').get().subscribe((venue: any) => {
          // resolve(venue.data());
          let data = venue.docs.map(element => {
            let item = element.data();
            item.id = element.id;
            if(item.itid){
              item.itid.get().then(function (doc) {
              item.itid = doc.data();
              });
            }

            return item;
          });
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }


  public getFacilities(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('facilities', ref => ref.orderBy('display_order','asc')).get().subscribe((venue: any) => {
        // resolve(venue.data());
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getIndividualPopularTest(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('status', '==', 1).where('health_package', '==', 0).where('isPopular', '==', 1)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getHomeIndividualPopularTest(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('status', '==', 1).where('health_package', '==', 0).where('isPopular', '==', 1).orderBy('display_order','asc')).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getCardiologyTest(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('status', '==', 1).where('isCardiology', '==', '1')).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getRadiologyTest(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('status', '==', 1).where('isRadiology', '==', '1')).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getMostPopularPackage(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('status', '==', 1).where('health_package', '==', 1).where('isPopular', '==', 1).orderBy('display_order','asc')).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAllTest(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests').get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAllIndividualTest(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('health_package', '==', 0).where('status', '==', 1)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAllHealthPackages(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('health_package', '==', 1).where('status', '==', 1).orderBy('display_order','asc')).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getMemberByUId(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('members', ref => ref.where('uid', '==', uid)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public deleteMember(uid, id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('members').doc(id).delete().then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public updateNewIndividual_test(id, param): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('individual_tests').doc(id).update(param).then((data) => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  } 

  public getIndividualTestById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('id', '==', id)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getGenderRecomendationById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('recommended_for', ref => ref.where('id', '==', id)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getRecommendedFor(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('recommended_for',ref=>ref.orderBy('name','asc')).get().subscribe((recommendeds: any) => {
        let data = recommendeds.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAgeRecomendationById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('age_groups', ref => ref.where('id', '==', id)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAgeGroup(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('age_groups',ref=>ref.orderBy('name','asc')).get().subscribe((ages: any) => {
        let data = ages.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getSecondaryLabById(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('venue', ref => ref.where('uid', '==', uid)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.primary.get().then(function (doc) {
            item.primary = doc.data();
          });
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getPrimaryLabById(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('venue', ref => ref.where('uid', '==', uid).where('type', '==', 'primary')).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getPrimaryLab(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('venue', ref => ref.where('status', '==', 'open').where('type', '==', 'primary')).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
    public getLabCount(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('venue').get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  
  public getMemberById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('members', ref => ref.where('id', '==', id)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getIndividualTest(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('individual_tests', ref => ref.where('status', '==', 1)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAssociatedTestById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('associated_tests', ref => ref.where('individual_test', '==', id)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getSecondaryLabs(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('venue', ref => ref.where('status', '==', 'open')).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          if(item.primary != undefined){
             item.primary.get().then(function (doc) {
            item.primary = doc.data();
           });
          }
         
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getOffers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('offers').get().subscribe((offer: any) => {
        let data = offer.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getHealthHabbits(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('habbits', ref => ref.where('status', '==', 1)).get().subscribe((habbits: any) => {
        let data = habbits.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getHealthHabbitsById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('habbits', ref => ref.where('id', '==', id)).get().subscribe((habbits: any) => {
        let data = habbits.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getHealthRisk(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('health_risks', ref => ref.where('status', '==', 1)).get().subscribe((risks: any) => {
        let data = risks.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }  

  public getHealthRiskById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('health_risks', ref => ref.where('id', '==', id)).get().subscribe((risks: any) => {
        let data = risks.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }


  public getLabReports(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('labreports').get().subscribe((report: any) => {
        let data = report.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getVenueCategories(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('defaultcategories',ref=>ref.orderBy('createdAt')).get().subscribe((categories) => {
        var data = categories.docs.map(element => {
          var item = element.data();
          item.id = element.id;
          return item;
        })
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  public getSettings(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('settings').get().subscribe((setting: any) => {
        let data = setting.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

   addUsedCoupon(id,param){
     return new Promise<any>((resolve, reject) => {
      this.adb.collection('used_coupon').doc(id).set(param,{merge:true}).then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public getUsedCoupon(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('used_coupon', ref => ref.where('uid', '==', uid)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

   public getUsedCouponById(uid,couponid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('used_coupon', ref => ref.where('uid', '==', uid).where('couponid', '==', couponid)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getUsedCouponByCouponCode(uid,couponCode): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('used_coupon', ref => ref.where('uid', '==', uid).where('couponCode', '==', couponCode)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public insertUsedCoupon(id,param): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('used_coupon').doc(id).set(param).then((data) => {
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  public updateUsedCoupon(id,param){
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('used_coupon').doc(id).update(param).then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public addTransaction(id, param): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('transactions').doc(id).set(param).then((data) => {
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  public getTransaction(uid,start_date,end_date): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('transactions', ref => ref.where('uid', '==', uid).where('createdAt', '>', start_date).where('createdAt', '<', end_date).orderBy('createdAt', 'desc')).get().subscribe((transactions: any) => {
        let data = transactions.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getMyTransaction(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('transactions', ref => ref.where('uid', '==', uid).orderBy('createdAt', 'desc')).get().subscribe((transactions: any) => {
        let data = transactions.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public addNewAddress(uid, id, param): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('address').doc(uid).collection('all').doc(id).set(param).then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public updateAddress(uid, id, param): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('address').doc(uid).collection('all').doc(id).update(param).then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public getMyAddress(uid: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('address').doc(uid).collection('all').get().then((data) => {
        var users = data.docs.map(doc => {
          var item = doc.data();
          item.id = doc.id;
          return item;
        });
        resolve(users);
      }, error => {
        reject(error);
      });
    });
  }

  public deleteAddress(uid, id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('address').doc(uid).collection('all').doc(id).delete().then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public getBookingsByAddressId(uid,id): Promise<any> {
    console.log(uid,id)
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('orders', ref => ref.where('uid', '==', uid).where('address', '==', id)).get().subscribe((coupons: any) => {
        let data = coupons.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getAddressById(uid, id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('address').doc(uid).collection('all', ref => ref.where('id', '==', id)).get().subscribe((venue) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      })
    });
  }

  public getReasonById(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('return_reason', ref => ref.where('id', '==', id)).get().subscribe((venue) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      })
    });
  }

  public getAllBookings(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('booking').get().subscribe(async (venue) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getMyBookings(id,start_date,end_date): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('booking', ref => ref.where('uid', '==', id).where('createdAt', '>=', start_date).where('createdAt', '<=', end_date).orderBy('createdAt','desc')).get().subscribe(async (venue) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          item.Lvid.get().then(function (doc) {
            item.lab = doc.data();
          });
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getBookings(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('booking', ref => ref.where('uid', '==', id).orderBy('createdAt','desc')).get().subscribe(async (venue) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;

          item.Lvid.get().then(function (doc) {
            item.lab = doc.data();
          });

          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getBookingById(id): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      this.adb.collection('booking', ref => ref.where('booking_id', '==', id)).get().subscribe(async (order: any) => {
          let data = order.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  updateBooking(id,param){
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('booking').doc(id).update(param).then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public addReview(id,param): Promise<any> {
    param.booking = this.db.doc('booking/' + param.booking_id);
    param.lab = this.db.doc('venue/' + param.lab_id);
    param.user = this.db.doc('users/' + param.uid);
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('review').doc(id).set(param).then((data) => {
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  public remarks(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('return_reason', ref => ref.where('type', '==', 'patient')).get().subscribe((list: any) => {
        let data = list.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  public getMySubscriptions(id,start_date,end_date): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('subscriptions', ref => ref.where('userId', '==', id).where('createdOn', '>', start_date).where('createdOn', '<', end_date).orderBy('createdOn','desc')).get().subscribe(async (venue) => {
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public updateProfile(uid, param): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('users').doc(uid).update(param).then((data) => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public getWebBanners(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('websitebanners').get().subscribe((venue: any) => {
        // resolve(venue.data());
        let data = venue.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getNotifications(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('notifications', ref => ref.where('uid', '==', uid)).get().subscribe((notifications: any) => {
        let data = notifications.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getSupport(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('support', ref => ref.where('userid', '==', uid)).get().subscribe((support: any) => {
        let data = support.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public addBookings(id, param): Promise<any> {
    param.userId = this.db.doc('users/' + param.uid);
    param.Lvid = this.db.doc('venue/' + param.Lvid);
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('booking').doc(id).set(param).then((data) => {
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  public addSupport(id, param): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('support').doc(id).set(param).then((data) => {
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }
  
  public addQuery(id, param): Promise<any> {
	  //param.city = this.db.doc('cities/' + param.cityid);
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('queries').doc(id).set(param).then((data) => {
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }
  
  public addCorporate(id, param): Promise<any> {
	  //param.city = this.db.doc('cities/' + param.cityid);
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('corporate').doc(id).set(param).then((data) => {
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  public addMoneyToWallet(uid,param){
     return new Promise<any>((resolve, reject) => {
      this.adb.collection('wallet').doc(uid).set(param,{merge: true}).then((data) => {
        resolve(data);
      }, error => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
    });
  }

  public addWalletTransaction(id, param): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('wallet_transactions').doc(id).set(param,{merge: true}).then((data) => {
        console.log(data)
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  public getWallet(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('wallet', ref => ref.where('uid', '==', uid)).get().subscribe((money: any) => {
        let data = money.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getWalletTransactions(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('wallet_transactions', ref => ref.where('uid', '==', uid).where('status', '==', 'success').orderBy('createdAt','desc')).get().subscribe((transactions: any) => {
        let data = transactions.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getWalletTransactionsByBooking(uid,booking_id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('wallet_transactions', ref => ref.where('uid', '==', uid).where('booking_id', '==', booking_id)).get().subscribe((transactions: any) => {
        let data = transactions.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  sendNotification(title,msg,id) {
    const body = {
      app_id: environment.onesignal.appId,
      include_player_ids: [id],
      headings: { en: title },
      contents: { en: msg },
      // big_picture: 'https://firebasestorage.googleapis.com/v0/b/avagro-8a44d.appspot.com/o/order.gif?alt=media&token=5f1ae8c9-2ea1-456e-8ba3-a185a4054900'
      // data: { task: msg },
    };
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Basic ${environment.onesignal.restKey}`)
    };
    console.log(header)
    return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
  }

  sendSupportNotification(title,msg,id) {
    const body = {
      app_id: environment.onesignal.appId,
      include_player_ids: [id],
      headings: { en: title },
      contents: { en: msg },
      // data: { task: msg },
    };
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Basic ${environment.onesignal.restKey}`)
    };
    console.log(header)
    return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
  }

  // satya's code 26-4-22
  public getSecondaryLabsByPin(pincode): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('venue', ref => ref.where("deliveries","array-contains" , pincode)).get().subscribe((transactions: any) => {
        let data = transactions.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }


  public getAssociatedTestByProductAndBranch(branch,test_id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('associated_tests', ref => ref.where("branch_id","==" , branch).where("individual_test","==" , test_id)).get().subscribe((transactions: any) => {
        let data = transactions.docs.map(element => {
          let item = element.data();
          item.id = element.id;
          if(item.itid){
              item.itid.get().then(function (doc) {
              item.itid = doc.data();
              });
            }
          return item;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

public getLabTestById(id: any): Promise<any> {
      // console.log(societyId);
      return new Promise<any>((resolve, reject) => {
        this.adb.collection('individual_tests', ref => ref.where('id', '==', id)).get().subscribe(async (data) => {
          var users = data.docs.map(doc => {
            var item = doc.data();
            item.id = doc.id;
            return item;
          });
          resolve(users);
        }, error => {
          reject(error);
        });
      });
    } 

  // satya's code end 26-4-22

    // satya's code 28-4-22
  public getVenueDetails(id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('venue').doc(id).get().subscribe((venue: any) => {
        resolve(venue.data());
      }, error => {
        reject(error);
      });
    });
  }
  
  // satya's code 28-4-22 end

  sendWalletNotification(title,msg,id) {
    const body = {
      app_id: environment.onesignal.appId,
      include_player_ids: [id],
      headings: { en: title },
      contents: { en: msg },
      // data: { task: msg },
    };
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Basic ${environment.onesignal.restKey}`)
    };
    console.log(header)
    return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
  }

  sendEmail() {
    const body = {
      email: 'saifk210@gmail.com',
      name: 'Mohd Saif Khan',
    };
    console.log(body)
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Content-Type','application/x-www-form-urlencoded')
    };
    return this.http.post('https://demo.orgmachine.com/avagro_sms/phpmailer/send.php', body, header);
  }

  sendSms(url){
    return this.http.post(url,'');
  }

  sendOtp(phone){
    let url = 'https://demo.orgmachine.com/way2lab_sms/otp.php?mobile='+phone;
    return this.http.post(url,'');
  }

 /*  verifyOtp(data){
    let url = 'https://demo.orgmachine.com/verify_otp.php'
    const header = {
    headers: new HttpHeaders()
        .set('Content-Type', 'jsonp')
        .set('Content-Type','application/x-www-form-urlencoded')
    };
    return this.http.post(url,data,header);
  } */
  
   verifyOtp(data){
    console.log(data)
    let url = 'https://demo.orgmachine.com/way2lab_sms/verify_otp_get.php?mobile='+data.mobile+'&otp='+data.otp
    // let url = 'https://demo.orgmachine.com/way2lab_sms/otp.php?mobile='+phone;
    return this.http.post(url,'');
  }

  JSON_to_URLEncoded(element, key?, list?) {
    let new_list = list || [];
    if (typeof element == "object") {
      for (let idx in element) {
        this.JSON_to_URLEncoded(
          element[idx],
          key ? key + "[" + idx + "]" : idx,
          new_list
        );
      }
    } else {
      new_list.push(key + "=" + encodeURIComponent(element));
    }
    return new_list.join("&");
  }
}
