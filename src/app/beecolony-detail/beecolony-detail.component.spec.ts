import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeecolonyDetailComponent } from './beecolony-detail.component';

describe('BeecolonyDetailComponent', () => {
  let component: BeecolonyDetailComponent;
  let fixture: ComponentFixture<BeecolonyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeecolonyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeecolonyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
