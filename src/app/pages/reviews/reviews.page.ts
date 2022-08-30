import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController, ModalController, IonContent } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { BehaviorSubject } from 'rxjs';
import { ViewerModalComponent } from "ngx-ionic-image-viewer";
import { StarRatingModule } from 'ionic5-star-rating';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage {
  product_detail: any;
  product_id: any;
  rating: any = 0;
  star_rating: any;
  rating_count: any;
  avg_rating: any;
  allReviews: any = [];
  constructor(
    private route: ActivatedRoute,
    private api: ApisService,
    private util: UtilService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private router: Router,
    private datePicker: DatePicker,
    private modalController: ModalController
  ) { 
      this.route.queryParams.subscribe(data => { 
        this.allReviews = JSON.parse(data.value);
        console.log(this.allReviews)
        this.product_id = data.productid;
        console.log(this.product_id)
        this.getProductById(this.product_id)
      });
  }

  getProductById(id){
    console.log(id)
    // this.api.getProductDetails(id).then((data) => {
    //   this.product_detail = data[0];
    //     this.star_rating = this.product_detail.star_rating;
    //     this.rating_count = this.product_detail.rating_count;
    //     this.avg_rating = parseFloat(this.product_detail.avg_rating).toFixed(1);
    //     console.log(this.avg_rating)
    //     this.rating = this.star_rating / this.rating_count;
    //     console.log(this.rating);
    // }).catch(err => {
    //   if (err) {
    //     console.log(err);
    //     this.util.showToast(`${err}`, 'danger', 'bottom');
    //   }
    // });  
  }
}