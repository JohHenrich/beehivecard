import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskTreatmentComponent } from './dialog-task-treatment.component';

describe('DialogTaskTreatmentComponent', () => {
  let component: DialogTaskTreatmentComponent;
  let fixture: ComponentFixture<DialogTaskTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTaskTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
