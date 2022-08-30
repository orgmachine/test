import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsPageRoutingModule } from './contactus-routing.module';

import { ContactUsPage } from './contactus.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
	ComponentsModule
  ],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule { }
