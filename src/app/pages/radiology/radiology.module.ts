import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiologyPageRoutingModule } from './radiology-routing.module';

import { RadiologyPage } from './radiology.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiologyPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
	ComponentsModule
  ],
  declarations: [RadiologyPage]
})
export class RadiologyPageModule { }
