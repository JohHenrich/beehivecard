import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditHarvestComponent } from './dialog-edit-harvest.component';

describe('DialogEditHarvestComponent', () => {
  let component: DialogEditHarvestComponent;
  let fixture: ComponentFixture<DialogEditHarvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditHarvestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditHarvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
