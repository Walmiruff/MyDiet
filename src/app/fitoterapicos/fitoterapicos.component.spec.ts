import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitoterapicosComponent } from './fitoterapicos.component';

describe('FitoterapicosComponent', () => {
  let component: FitoterapicosComponent;
  let fixture: ComponentFixture<FitoterapicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitoterapicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitoterapicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
