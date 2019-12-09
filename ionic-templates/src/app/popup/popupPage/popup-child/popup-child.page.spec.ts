import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupChildPage } from './popup-child.page';

describe('PopupChildPage', () => {
  let component: PopupChildPage;
  let fixture: ComponentFixture<PopupChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
