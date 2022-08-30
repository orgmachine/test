import { Component,OnInit } from '@angular/core';
import { AlertController,ActionSheetController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit{
  user_email:any;
  Attachments: any = '';
  reason: any;
  remark: any;
  customAlertOptions: any = {
    header: 'Select an Issue',
    translucent: true
  };
  isAttach: boolean=false;
  reference_id: any = '';
  showInput: boolean = true;
  file_extension: any;
  base64textString: any;
  image: string;
  token: any;
  supportForm: FormGroup;
    constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,  
    private api: ApisService,
    private util: UtilService,
    private camera: Camera,
    public formBuilder: FormBuilder,
    private actionSheetController: ActionSheetController,
	public menu: MenuController
    ) {
	  this.menu.enable(false);		
      this.supportForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      select: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      remark: ['', [Validators.required]],
    })
  }
  public issues = [
    {id: 1, title : "Related to Lab Test Booking"},
    {id: 2, title : "Related to Sample Collection"},
    {id: 3, title : "Related to Payments"},
    {id: 4, title : "Related to Website"},
    {id: 5, title : "Others"}
  ]
  checkId(reason) {
    console.log(reason)
    this.reason = reason;
    if(reason == 'Others'){
      this.showInput = false;
    }
  }
  ngOnInit() {
    const uid = sessionStorage.getItem('uid');
    this.api.getMyProfile(uid).then((info) => {
      console.log(info)
      if(info!=undefined) {
        this.user_email=info.email;
        this.token = info.fcm_token;
        console.log(this.token)
      }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });  
  }
  async openCamera() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose from',
      buttons: [{
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.opemCamera('gallery');
        }
      }, {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.opemCamera('camera');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  opemCamera(type) {
    const options: CameraOptions = {      
      quality: 100,
      targetHeight: 700,
      targetWidth: 700,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type === 'camera' ? 1 : 0,
      saveToPhotoAlbum: false,
      correctOrientation:false
    };
    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.image = base64Image;
      this.util.show();
      const id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
      firebase.storage().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg')
        .putString(base64Image, 'data_url').then((snapshot) => {
          this.util.hide();
          snapshot.ref.getDownloadURL().then((url) => {
            console.log('url uploaded', url);
            this.isAttach = true;
            this.Attachments = url;
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

  handleFileSelect(evt){
    //this.util.show();
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
           //this.util.hide();
            console.log('url uploaded', url);
            const uid = sessionStorage.getItem('uid');
            const date = new Date();
            const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A")
            const id = Math.floor(100000000 + Math.random() * 900000000);
            this.isAttach = true;
            this.Attachments = url;
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


  report(){
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
        const param = {
          userid: uid,
          createdAt: created,
          id: id.toString(),
          image: this.Attachments, 
          reason: this.reason,
          query: this.remark,
          status: 0,
          reference_id: this.reference_id
        };
      this.api.addSupport(id.toString(),param).then((userData) => {
        let navigationExtras: NavigationExtras = { state: { incident_id: id.toString()} };
        this.sendNotification(id)
        this.util.showToast('We have received your issue we will get back to you shortly.', 'primary', 'bottom');
        this.router.navigate(['/home']);
      }).catch(err => {
        if (err) {
          console.log(err);
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }
      });
  }

  sendNotification(id) {
    let title = 'Support ticket confirmation'
    let msg = 'This is to inform you that your customer support ticket ' + id + ' has been received. We will be in touch shortly. Thank you.'
    this.api.sendSupportNotification(title,msg,this.token).subscribe((data) => {
      console.log(data)
    }, error => {
        // this.util.hide();
        console.log('err', error);
    });
  }

  viewList(){
  	this.router.navigate(['support-list']);
  }
}