import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CapitalLetterWorksheet3Component } from './std01-capital-letter-worksheet3.component';

describe('Std01CapitalLetterWorksheet3Component', () => {
  let component: Std01CapitalLetterWorksheet3Component;
  let fixture: ComponentFixture<Std01CapitalLetterWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CapitalLetterWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CapitalLetterWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
