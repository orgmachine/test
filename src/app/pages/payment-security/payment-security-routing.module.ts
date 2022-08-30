import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSecurityPage } from './payment-security.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSecurityPageRoutingModule {}
