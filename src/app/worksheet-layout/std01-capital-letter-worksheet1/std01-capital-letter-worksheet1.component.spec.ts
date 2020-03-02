import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CapitalLetterWorksheet1Component } from './std01-capital-letter-worksheet1.component';

describe('Std01CapitalLetterWorksheet1Component', () => {
  let component: Std01CapitalLetterWorksheet1Component;
  let fixture: ComponentFixture<Std01CapitalLetterWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CapitalLetterWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CapitalLetterWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
