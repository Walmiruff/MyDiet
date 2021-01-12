import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementosDetailsComponent } from './suplementos-details.component';

describe('SuplementosDetailsComponent', () => {
  let component: SuplementosDetailsComponent;
  let fixture: ComponentFixture<SuplementosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplementosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplementosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
