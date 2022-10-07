import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFoodTaskComponent } from './dialog-food-task.component';

describe('DialogFoodTaskComponent', () => {
  let component: DialogFoodTaskComponent;
  let fixture: ComponentFixture<DialogFoodTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFoodTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFoodTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
