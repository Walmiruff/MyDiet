import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAlimComponent } from './plan-alim.component';

describe('PlanAlimComponent', () => {
  let component: PlanAlimComponent;
  let fixture: ComponentFixture<PlanAlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAlimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
