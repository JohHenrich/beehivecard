import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddBeecolonyComponent } from './dialog-add-beecolony.component';

describe('DialogAddBeecolonyComponent', () => {
  let component: DialogAddBeecolonyComponent;
  let fixture: ComponentFixture<DialogAddBeecolonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddBeecolonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddBeecolonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
