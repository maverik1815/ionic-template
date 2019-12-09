import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup-child',
  templateUrl: './popup-child.page.html',
  styleUrls: ['./popup-child.page.scss'],
})
export class PopupChildPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }
  closeModal() {
    this.modal.dismiss().then(res=> {
      console.log('model closed');
    })

  }

}
