import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskFoodComponent } from './dialog-task-feeding.component';

describe('DialogTaskFoodComponent', () => {
  let component: DialogTaskFoodComponent;
  let fixture: ComponentFixture<DialogTaskFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTaskFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
