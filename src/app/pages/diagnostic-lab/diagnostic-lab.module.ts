import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticLabPageRoutingModule } from './diagnostic-lab-routing.module';

import { DiagnosticLabPage } from './diagnostic-lab.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticLabPageRoutingModule,
    SharedModule,
    StarRatingModule,
    ReactiveFormsModule,
	ComponentsModule
  ],
  declarations: [DiagnosticLabPage]
})
export class DiagnosticLabPageModule { }
