import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CapitalLetterWorksheet2Component } from './std01-capital-letter-worksheet2.component';

describe('Std01CapitalLetterWorksheet2Component', () => {
  let component: Std01CapitalLetterWorksheet2Component;
  let fixture: ComponentFixture<Std01CapitalLetterWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CapitalLetterWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CapitalLetterWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
