import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrieCardComponent } from './entrie-card.component';

describe('EntrieCardComponent', () => {
  let component: EntrieCardComponent;
  let fixture: ComponentFixture<EntrieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrieCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
