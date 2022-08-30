import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosticLabPage } from './diagnostic-lab.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnosticLabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosticLabPageRoutingModule {}
