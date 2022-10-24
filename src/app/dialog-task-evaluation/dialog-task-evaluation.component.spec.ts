import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskEvaluationComponent } from './dialog-task-evaluation.component';

describe('DialogTaskEvaluationComponent', () => {
  let component: DialogTaskEvaluationComponent;
  let fixture: ComponentFixture<DialogTaskEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTaskEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
