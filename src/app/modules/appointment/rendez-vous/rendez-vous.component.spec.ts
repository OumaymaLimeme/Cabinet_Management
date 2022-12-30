import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousComponent } from './rendez-vous.component';

describe('RendezVousComponent', () => {
  let component: RendezVousComponent;
  let fixture: ComponentFixture<RendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
