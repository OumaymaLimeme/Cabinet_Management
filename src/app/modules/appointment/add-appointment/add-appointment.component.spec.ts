import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentComponent } from './add-appointment.component';

describe('AddAppointmentComponent', () => {
  let component: AddAppointmentComponent;
  let fixture: ComponentFixture<AddAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
