import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsufficientPageRoutingModule } from './insufficient-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/directives/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    InsufficientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class InsufficientPageModule {}
