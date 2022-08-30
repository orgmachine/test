import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiologyPageRoutingModule } from './cardiology-routing.module';

import { CardiologyPage } from './cardiology.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiologyPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
	ComponentsModule
  ],
  declarations: [CardiologyPage]
})
export class CardiologyPageModule { }
