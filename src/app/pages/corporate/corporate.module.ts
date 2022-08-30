import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorporatePageRoutingModule } from './corporate-routing.module';

import { CorporatePage } from './corporate.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorporatePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
	ComponentsModule
  ],
  declarations: [CorporatePage]
})
export class CorporatePageModule { }
