import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalConfigComponent } from './hospital-config.component';

describe('HospitalConfigComponent', () => {
  let component: HospitalConfigComponent;
  let fixture: ComponentFixture<HospitalConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
