import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasSubstComponent } from './listas-subst.component';

describe('ListasSubstComponent', () => {
  let component: ListasSubstComponent;
  let fixture: ComponentFixture<ListasSubstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasSubstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasSubstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
