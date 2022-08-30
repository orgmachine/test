import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsufficientPage } from './insufficient.page';

const routes: Routes = [
  {
    path: '',
    component: InsufficientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsufficientPageRoutingModule {}
