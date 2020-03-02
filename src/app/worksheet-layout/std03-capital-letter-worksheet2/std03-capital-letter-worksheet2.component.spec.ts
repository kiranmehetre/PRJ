import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CapitalLetterWorksheet2Component } from './std03-capital-letter-worksheet2.component';

describe('Std03CapitalLetterWorksheet2Component', () => {
  let component: Std03CapitalLetterWorksheet2Component;
  let fixture: ComponentFixture<Std03CapitalLetterWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CapitalLetterWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CapitalLetterWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
