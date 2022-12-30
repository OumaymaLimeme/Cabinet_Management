import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsuranceComponent } from './add-insurance.component';

describe('AddInsuranceComponent', () => {
  let component: AddInsuranceComponent;
  let fixture: ComponentFixture<AddInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
