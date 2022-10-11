import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskGeneralComponent } from './dialog-task-general.component';

describe('DialogTaskGeneralComponent', () => {
  let component: DialogTaskGeneralComponent;
  let fixture: ComponentFixture<DialogTaskGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTaskGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
