import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosEnergComponent } from './gastos-energ.component';

describe('GastosEnergComponent', () => {
  let component: GastosEnergComponent;
  let fixture: ComponentFixture<GastosEnergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosEnergComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosEnergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
