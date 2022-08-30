import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTransactionPage } from './my-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: MyTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTransactionPageRoutingModule {}
