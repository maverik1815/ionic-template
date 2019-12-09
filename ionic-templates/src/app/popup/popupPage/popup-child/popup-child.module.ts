import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupChildPageRoutingModule } from './popup-child-routing.module';

import { PopupChildPage } from './popup-child.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupChildPageRoutingModule
  ],
  declarations: [PopupChildPage],
  entryComponents: [PopupChildPage]
})
export class PopupChildPageModule {}
