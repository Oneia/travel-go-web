import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMarkerInfoComponent } from './modal-marker-info.component';

describe('ModalMarkerInfoComponent', () => {
  let component: ModalMarkerInfoComponent;
  let fixture: ComponentFixture<ModalMarkerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMarkerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMarkerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
