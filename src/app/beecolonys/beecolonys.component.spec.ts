import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeecolonysComponent } from './beecolonys.component';

describe('BeeclolonysComponent', () => {
  let component: BeecolonysComponent;
  let fixture: ComponentFixture<BeecolonysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeecolonysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeecolonysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
