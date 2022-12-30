import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRendezvousComponent } from './edit-rendezvous.component';

describe('EditRendezvousComponent', () => {
  let component: EditRendezvousComponent;
  let fixture: ComponentFixture<EditRendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
