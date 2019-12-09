import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupPage } from './popup.page';

const routes: Routes = [
  {
    path: '',
    component: PopupPage
  },
  {
    path: 'popup-child',
    loadChildren: () => import('./popupPage/popup-child/popup-child.module').then( m => m.PopupChildPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupPageRoutingModule {}
