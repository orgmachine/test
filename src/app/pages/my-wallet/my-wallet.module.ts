import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWalletPageRoutingModule } from './my-wallet-routing.module';

import { MyWalletPage } from './my-wallet.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MyWalletPageRoutingModule
  ],
  declarations: [MyWalletPage]
})
export class MyWalletPageModule {}
