import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeticosComponent } from './diabeticos.component';

describe('DiabeticosComponent', () => {
  let component: DiabeticosComponent;
  let fixture: ComponentFixture<DiabeticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabeticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabeticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
