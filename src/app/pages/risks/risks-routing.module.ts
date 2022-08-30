import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RisksPage } from './risks.page';

const routes: Routes = [
  {
    path: '',
    component: RisksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RisksPageRoutingModule {}
