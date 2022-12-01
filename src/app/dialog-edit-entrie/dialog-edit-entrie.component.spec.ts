import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditEntrieComponent } from './dialog-edit-entrie.component';

describe('DialogEditEntrieComponent', () => {
  let component: DialogEditEntrieComponent;
  let fixture: ComponentFixture<DialogEditEntrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditEntrieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditEntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
