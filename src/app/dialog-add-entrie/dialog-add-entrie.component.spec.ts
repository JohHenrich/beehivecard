import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEntrieComponent } from './dialog-add-entrie.component';

describe('DialogAddEntrieComponent', () => {
  let component: DialogAddEntrieComponent;
  let fixture: ComponentFixture<DialogAddEntrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEntrieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddEntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
