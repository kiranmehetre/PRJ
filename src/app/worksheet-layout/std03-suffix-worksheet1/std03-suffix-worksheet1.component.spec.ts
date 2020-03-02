import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SuffixWorksheet1Component } from './std03-suffix-worksheet1.component';

describe('Std03SuffixWorksheet1Component', () => {
  let component: Std03SuffixWorksheet1Component;
  let fixture: ComponentFixture<Std03SuffixWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SuffixWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SuffixWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
