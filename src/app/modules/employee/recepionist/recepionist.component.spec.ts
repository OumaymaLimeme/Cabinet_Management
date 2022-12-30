import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepionistComponent } from './recepionist.component';

describe('RecepionistComponent', () => {
  let component: RecepionistComponent;
  let fixture: ComponentFixture<RecepionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
