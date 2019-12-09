import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkStatusPageRoutingModule } from './network-status-routing.module';

import { NetworkStatusPage } from './network-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkStatusPageRoutingModule
  ],
  declarations: [NetworkStatusPage]
})
export class NetworkStatusPageModule {}
