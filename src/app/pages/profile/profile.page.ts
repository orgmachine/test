import { Component, OnInit } from "@angular/core";
import { Camera } from "@ionic-native/camera/ngx";
import { ActionSheetController, ModalController, MenuController } from "@ionic/angular";
import { ViewerModalComponent } from "ngx-ionic-image-viewer";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from "src/app/services/util.service";
import { LoginPage } from "../login/login.page";
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  isImgChange: boolean;
  imagePreview: any;
  profile: any;
  data: any;
  imageUrl: any;
  constructor(
    private camera: Camera,
    private sheetCtrl: ActionSheetController,
    private api: ApisService,
    private util: UtilService,
    private router: Router,
    private modalController: ModalController,
	  public menu: MenuController
  ) {
    this.util.publishCityList('cities')
	 // this.menu.enable(false);
  }
  ngOnInit(){}

  ionViewWillEnter() {
    const uid = sessionStorage.getItem('uid');
    console.log(uid)
    this.api.getMyProfile(uid).then((data) => {
      this.profile = data;
      console.log(this.profile);
      this.imageUrl = this.profile.imagePath;
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  async openViewer() {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.profile.imagePath + this.profile.image,
      },
      cssClass: "ion-img-viewer",
      keyboardClose: true,
      showBackdrop: true,
    });

    return await modal.present();
  }
  profilego() {
    this.router.navigate(['edit-profile']);
  }

  logout(){
    this.api.logout().then((data) => {
      sessionStorage.setItem('loginStatus', "false");
      this.api.isSignedIn = false;
      sessionStorage.setItem('uid', '');
      localStorage.setItem('cartdata',JSON.stringify({}))
      this.router.navigate(['home']);
    }).catch(error => {
      console.log(error);
    });
  }
  public image: any = "../../../assets/image/Ellipse 14.png";
}
