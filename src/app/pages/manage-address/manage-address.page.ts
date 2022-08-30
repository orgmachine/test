import { Component, OnInit } from "@angular/core";
import { ModalController, MenuController } from "@ionic/angular";
import { AddAddressPage } from 'src/app/pages/add-address/add-address.page';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: "app-manage-address",
  templateUrl: "./manage-address.page.html",
  styleUrls: ["./manage-address.page.scss"],
})
export class ManageAddressPage implements OnInit {
  address: any = [];
  selectAddresss: any;
  isFrom: string;
  myaddress: any;
  constructor(
    private modal: ModalController,
    private api: ApisService,
    private util: UtilService,
	  public menu: MenuController
  ) {
	  //this.menu.enable(false);
  }

  ngOnInit() {}

  ionViewWillEnter() {
    let uid  = sessionStorage.getItem('uid');
    this.api.getMyAddress(uid).then((data) => {
      if (data && data.length) {
        this.address = data;
        console.log(this.address)
      }
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }
  // async address() {
  //   const modal = await this.modal.create({
  //     component: AddAddressPage,
  //     cssClass: "manage-address",
  //   });
  //   modal.onDidDismiss().then((res) => {
  //     this.ionViewWillEnter();    });
  //   return await modal.present();
  // }

  close() {
    this.modal.dismiss();
  }

  selectAddress(item) {
    localStorage.setItem("SelectAddress", item.addr1);
    this.modal.dismiss(item);
  }

  isDelete: boolean = true;

  deleteAddress(id) {
    let uid  = sessionStorage.getItem('uid');
      this.api.getBookingsByAddressId(uid,id).then((data) => {
      console.log(data)
      if(data && data.length) {
      this.util.showToast("Address is in Use", 'danger', 'bottom');
      } else {
        this.api.deleteAddress(uid,id).then((data) => {
          console.log(data)
          this.address = [];
           this.ionViewWillEnter();
          this.util.showToast("Address Deleted Successfully", 'primary', 'bottom');
      }).catch(err => {
        if (err) {
          console.log(err);
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }
      });
     }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  async addNew() {
    localStorage.setItem('routeFrom','add')
    const modal = await this.modal.create({
    component: AddAddressPage,
    componentProps: {
        "modalTitle": "Product"
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.address = [];
      this.ionViewWillEnter();
    });
    return await modal.present();
  }

  async editAddress(data) {
  localStorage.setItem('routeFrom','Manage')
   const modal = await this.modal.create({
   component: AddAddressPage,
   componentProps: {
        "modalTitle": "Manage",
        data: data
      }
   });
    modal.onDidDismiss().then((dataReturned) => {
      this.address = [];
      this.ionViewWillEnter();
    });
   return await modal.present();
  }
}
