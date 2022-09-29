import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditLocationComponent } from './dialog-edit-location.component';

describe('DialogEditLocationComponent', () => {
  let component: DialogEditLocationComponent;
  let fixture: ComponentFixture<DialogEditLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
