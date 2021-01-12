import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertensosComponent } from './hipertensos.component';

describe('HipertensosComponent', () => {
  let component: HipertensosComponent;
  let fixture: ComponentFixture<HipertensosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipertensosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipertensosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
