import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpPageRoutingModule } from './otp-routing.module';

import { OtpPage } from './otp.page';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeInputModule } from 'angular-code-input';

@NgModule({
  imports: [
  	CodeInputModule,
    CommonModule,
    FormsModule,
    IonicModule,
    OtpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OtpPage]
})
export class OtpPageModule { }
