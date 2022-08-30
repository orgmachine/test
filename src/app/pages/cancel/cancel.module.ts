import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelPageRoutingModule } from './cancel-routing.module';

import { CancelPage } from './cancel.page';
import { SharedModule } from 'src/app/directives/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CancelPageRoutingModule,
    SharedModule
  ],
  declarations: [CancelPage]
})
export class CancelPageModule { }
