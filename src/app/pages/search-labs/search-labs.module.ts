import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLabsPageRoutingModule } from './search-labs-routing.module';

import { SearchLabsPage } from './search-labs.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePlaceModule,
    PipesModule,
    SearchLabsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
	ComponentsModule
  ],
  declarations: [SearchLabsPage]
})
export class SearchLabsPageModule { }
