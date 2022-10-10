import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewFoodComponent } from './dialog-new-food.component';

describe('DialogFoodComponent', () => {
  let component: DialogNewFoodComponent;
  let fixture: ComponentFixture<DialogNewFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
