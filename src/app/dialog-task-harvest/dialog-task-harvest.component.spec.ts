import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskHarvestComponent } from './dialog-task-harvest.component';

describe('DialogTaskHarvestComponent', () => {
  let component: DialogTaskHarvestComponent;
  let fixture: ComponentFixture<DialogTaskHarvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskHarvestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTaskHarvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
