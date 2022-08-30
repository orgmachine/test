import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchLabsPage } from './search-labs.page';

const routes: Routes = [
  {
    path: '',
    component: SearchLabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchLabsPageRoutingModule {}
