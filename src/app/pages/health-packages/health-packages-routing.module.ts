import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthPackagesPage } from './health-packages.page';

const routes: Routes = [
  {
    path: '',
    component: HealthPackagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthPackagesPageRoutingModule {}
