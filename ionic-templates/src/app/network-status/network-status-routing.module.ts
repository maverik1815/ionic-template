import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkStatusPage } from './network-status.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkStatusPageRoutingModule {}
