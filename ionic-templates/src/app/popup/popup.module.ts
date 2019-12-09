import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupPageRoutingModule } from './popup-routing.module';

import { PopupPage } from './popup.page';
import { PopupChildPage } from './popupPage/popup-child/popup-child.page';
import { PopupChildPageModule } from './popupPage/popup-child/popup-child.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupPageRoutingModule,
    PopupChildPageModule
  ],
  declarations: [PopupPage],
  entryComponents: [PopupChildPage]

})
export class PopupPageModule {}
