import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingPageRoutingModule } from './rating-routing.module';

import { RatingPage } from './rating.page';
import { StarRatingModule } from 'ionic5-star-rating';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPageRoutingModule,
    StarRatingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [RatingPage]
})
export class RatingPageModule { }
