import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestigationComponent } from './ivestigation.component';

describe('IvestigationComponent', () => {
  let component: IvestigationComponent;
  let fixture: ComponentFixture<IvestigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvestigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
