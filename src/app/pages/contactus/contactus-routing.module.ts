import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsPage } from './contactus.page';

const routes: Routes = [
  {
    path: '',
    component: ContactUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsPageRoutingModule {}
