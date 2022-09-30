import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBeecolonyComponent } from './dialog-edit-beecolony.component';

describe('DialogEditBeecolonyComponent', () => {
  let component: DialogEditBeecolonyComponent;
  let fixture: ComponentFixture<DialogEditBeecolonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditBeecolonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditBeecolonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
