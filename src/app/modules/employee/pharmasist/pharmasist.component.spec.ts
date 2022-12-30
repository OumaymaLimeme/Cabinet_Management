import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmasistComponent } from './pharmasist.component';

describe('PharmasistComponent', () => {
  let component: PharmasistComponent;
  let fixture: ComponentFixture<PharmasistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmasistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmasistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
