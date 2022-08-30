import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageAddressPageRoutingModule } from './manage-address-routing.module';

import { ManageAddressPage } from './manage-address.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageAddressPageRoutingModule,
	ComponentsModule
  ],
  declarations: [ManageAddressPage]
})
export class ManageAddressPageModule {}
