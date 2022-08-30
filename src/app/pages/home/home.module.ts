import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { StarRatingModule } from 'ionic5-star-rating';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,OwlModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    StarRatingModule,
    PipesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
