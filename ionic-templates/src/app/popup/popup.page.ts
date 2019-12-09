import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupChildPage } from './popupPage/popup-child/popup-child.page';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }
  /**
   * opens modal
   */
 async  openModal() {
    const modal = await this.modal.create({
      component: PopupChildPage
    });
    return await modal.present();
  }

}
