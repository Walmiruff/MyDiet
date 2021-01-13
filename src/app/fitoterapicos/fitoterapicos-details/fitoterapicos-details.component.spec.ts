import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitoterapicosDetailsComponent } from './fitoterapicos-details.component';

describe('FitoterapicosDetailsComponent', () => {
  let component: FitoterapicosDetailsComponent;
  let fixture: ComponentFixture<FitoterapicosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitoterapicosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitoterapicosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
