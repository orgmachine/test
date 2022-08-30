import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardiologyPage } from './cardiology.page';

const routes: Routes = [
  {
    path: '',
    component: CardiologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardiologyPageRoutingModule {}
