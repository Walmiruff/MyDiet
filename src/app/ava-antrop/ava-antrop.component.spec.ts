import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaAntropComponent } from './ava-antrop.component';

describe('AvaAntropComponent', () => {
  let component: AvaAntropComponent;
  let fixture: ComponentFixture<AvaAntropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaAntropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaAntropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
