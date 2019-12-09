import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkStatusPage } from './network-status.page';

describe('NetworkStatusPage', () => {
  let component: NetworkStatusPage;
  let fixture: ComponentFixture<NetworkStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
