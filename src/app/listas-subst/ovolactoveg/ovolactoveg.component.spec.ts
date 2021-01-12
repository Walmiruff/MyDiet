import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvolactovegComponent } from './ovolactoveg.component';

describe('OvolactovegComponent', () => {
  let component: OvolactovegComponent;
  let fixture: ComponentFixture<OvolactovegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvolactovegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvolactovegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
