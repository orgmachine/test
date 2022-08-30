import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsPageRoutingModule } from './reviews-routing.module';

import { ReviewsPage } from './reviews.page';

import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/directives/shared.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  entryComponents: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsPageRoutingModule,
    ComponentsModule,
    SharedModule,
    StarRatingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [ReviewsPage]
})
export class ReviewsPageModule { }
