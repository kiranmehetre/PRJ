import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SuffixWorksheet5Component } from './std03-suffix-worksheet5.component';

describe('Std03SuffixWorksheet5Component', () => {
  let component: Std03SuffixWorksheet5Component;
  let fixture: ComponentFixture<Std03SuffixWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SuffixWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SuffixWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
