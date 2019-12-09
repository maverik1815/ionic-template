import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-network-status',
  templateUrl: './network-status.page.html',
  styleUrls: ['./network-status.page.scss'],
})
export class NetworkStatusPage implements OnInit, OnDestroy{

  disconnectSubscription: Subscription;
  connectSubscription: Subscription;

  constructor(
    private network: Network
  ) { }

  ngOnInit() {

    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      alert('network was disconnected :-(');
    });
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      alert('network connected!');
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          alert('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
  }

  ngOnDestroy() {

    this.disconnectSubscription.unsubscribe();
    this.connectSubscription.unsubscribe();
  }

}
