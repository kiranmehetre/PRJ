import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CapitalLetterWorksheet1Component } from './std03-capital-letter-worksheet1.component';

describe('Std03CapitalLetterWorksheet1Component', () => {
  let component: Std03CapitalLetterWorksheet1Component;
  let fixture: ComponentFixture<Std03CapitalLetterWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CapitalLetterWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CapitalLetterWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
