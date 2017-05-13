import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemAddComponent } from './category-item-add.component';

describe('CategoryItemAddComponent', () => {
  let component: CategoryItemAddComponent;
  let fixture: ComponentFixture<CategoryItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
