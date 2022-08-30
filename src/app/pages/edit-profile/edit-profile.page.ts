import { Component, OnInit } from '@angular/core';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  code :any;
  profile: any;
  codeChange:any;
  image: string;
  imagePreview: any;
  isImgChange: boolean;
  name:any;
  email:any;
  phone:any;
  
  file_extension: any;
  base64textString: any;
  headerImage:any='';
  constructor(private camera:Camera,private sheetCtrl:ActionSheetController,private api:ApisService,private util:UtilService,public menu: MenuController) { this.menu.enable(false); }

  ngOnInit() {
    const uid = sessionStorage.getItem('uid');
    this.api.getMyProfile(uid).then((data) => {
      console.log('my profile', data);
      this.profile = data;
        console.log(data)
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  // changeProfile(){
  //   this.util.startLoad();
  //   let data = {
  //     code:this.code,
  //     email:this.email,
  //     phone:this.phone,
  //     name:this.name
  //   }
  //   this.api.postDataWithToken('profile_edit',data).subscribe((success:any) => {
  //     if(success.success){');
  //       this.util.navCtrl.navigateForward('tabs/profile');
  //       this.util.setNewLogin(true);
  //       this.util.newLogin.next(true);
  //       this.util.setNewprofile(true);
  //       this.util.dismissLoader();
  //     }
  //   }, err =>{
  //     this.util.dismissLoader();
  //   })
  // }
  // back(){
  //   this.util.navCtrl.back();
  // }

  async albumSheet() {
  //       this.util.presentToast('profile has successfully changed
    const actionSheet = await this.sheetCtrl.create({
      header: 'Albums',
      mode: 'ios',
      cssClass: 'image-picker', 
      buttons: [{
        text: 'Gallery',
        icon: 'images-sharp',
        handler: () => {
          this.getGallery();
        }
      }, {
        text: 'Camera',
        icon: 'camera-sharp',
        handler: () => {
          this.getCamera();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
  

  public getCamera():any {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }
    this.camera.getPicture(options).then(file_uri => {
      this.image = "data:image/jpg;base64," + file_uri;
      this.imagePreview = file_uri
      this.isImgChange = true;
      let data = {
        image:this.imagePreview
      }
      this.util.show();
      const id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
      firebase.storage().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg')
        .putString(this.image, 'data_url').then((snapshot) => {
          this.util.hide();
          snapshot.ref.getDownloadURL().then((url) => {
            console.log('url uploaded', url);
            const uid = sessionStorage.getItem('uid');
              const date = new Date();
              const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
              const id = Math.floor(100000000 + Math.random() * 900000000);
              this.profile.imagePath = url;
              let param =  {
                modifiedOn: modifiedOn,
                imagePath: url,
              }
              console.log(param)
              this.api.updateProfile(uid,param).then((data) => {
                console.log(data)
               // this.ngOnInit();
                this.util.showToast('Profile updated successfully', 'primary', 'bottom');
               }).catch(err => {
                if (err) {
                  console.log(err);
                  this.util.showToast(`${err}`, 'danger', 'bottom');
                }
              });
          });
        }, error => {
          this.util.hide();
          console.log(error);
        }).catch((error) => {
          console.log(error);
          this.util.hide();
        });
    }, (err) => {
      this.util.hide();
    // });
    });
  }

  public getGallery():any {
    const options: CameraOptions = { 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    }
    this.camera.getPicture(options).then(file_uri => {
      this.image = "data:image/jpg;base64," + file_uri;
      this.imagePreview = file_uri
      this.isImgChange = true;
      let data = {
        image:this.imagePreview
      }
      this.util.show();
      const id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
      firebase.storage().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg')
        .putString(this.image, 'data_url').then((snapshot) => {
          this.util.hide();
          snapshot.ref.getDownloadURL().then((url) => {
            console.log('url uploaded', url,);
            const uid = sessionStorage.getItem('uid');
              const date = new Date();
              const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
              const id = Math.floor(100000000 + Math.random() * 900000000);
              let param =  {
                modifiedOn: modifiedOn,
                imagePath: url,
              }
              console.log(param)
              this.api.updateProfile(uid,param).then((data) => {
                console.log(data)
                this.ngOnInit();
                this.util.showToast('Profile updated successfully', 'primary', 'bottom');
               }).catch(err => {
                if (err) {
                  console.log(err);
                  this.util.showToast(`${err}`, 'danger', 'bottom');
                }
              });
          });
        }, error => {
          this.util.hide();
          console.log(error);
        }).catch((error) => {
          console.log(error);
          this.util.hide();
        });
    }, (err) => {
      this.util.hide();
    });
  }

  changeProfile(){
    console.log(this.name)
    if(this.email == undefined){
      this.email=" ";
    } 
    if (this.name == undefined){
      this.name = " "
      console.log(this.name)
    }
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    let param =  {
      modifiedOn: modifiedOn,
      uid: uid,
      name: this.name,
      phone: this.phone,
      email: this.email,
      // imagePath: this.profile?.imagePath
    }
    console.log(param)
    this.api.updateProfile(uid,param).then((data) => {
      console.log(data)
      this.util.showToast('Profile has updated successfully', 'primary', 'bottom');
      this.ngOnInit();
     }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }


  handleFileSelect(evt){
    this.util.show();
    var files = evt.target.files;
    var file = files[0];
    let fileName = file.name;
    const lastDot = fileName.lastIndexOf('.');

    // const file_name = fileName.substring(0, lastDot);
    const ext = fileName.substring(lastDot + 1);
    this.file_extension = ext;
      if (files && file) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      }
     
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
     
        const base64Image = 'data:image/jpeg;base64,' + this.base64textString;

      this.image = base64Image;
    
      const id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
      firebase.storage().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg')
        .putString(base64Image, 'data_url').then((snapshot) => {
         
            snapshot.ref.getDownloadURL().then((url) => {
               this.util.hide();
                console.log('url uploaded', url);
                const uid = sessionStorage.getItem('uid');
                const date = new Date();
                const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
                const id = Math.floor(100000000 + Math.random() * 900000000);
                this.profile.imagePath = url;
                this.headerImage = url;
              let param =  {
                modifiedOn: modifiedOn,
                imagePath: url,
              }
              console.log(param)
              this.api.updateProfile(uid,param).then((data) => {
                console.log(data)
                this.ngOnInit();
                this.util.showToast('Profile updated successfully', 'primary', 'bottom');
               }).catch(err => {
                if (err) {
                  console.log(err);
                  this.util.showToast(`${err}`, 'danger', 'bottom');
                }
              });
                
                
              });
            }, error => {
              this.util.hide();
              console.log(error);
            }).catch((error) => {
              console.log(error);
              this.util.hide();
              this.util.errorToast(this.util.translate('Something went wrong'));
            });
    }

}
