import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthHabitsPage } from './health-habits.page';

const routes: Routes = [
  {
    path: '',
    component: HealthHabitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthHabitsPageRoutingModule {}
