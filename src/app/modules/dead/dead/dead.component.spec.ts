import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadComponent } from './dead.component';

describe('DeadComponent', () => {
  let component: DeadComponent;
  let fixture: ComponentFixture<DeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
