import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrieEditComponent } from './entrie-edit.component';

describe('EntrieEditComponent', () => {
  let component: EntrieEditComponent;
  let fixture: ComponentFixture<EntrieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrieEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
