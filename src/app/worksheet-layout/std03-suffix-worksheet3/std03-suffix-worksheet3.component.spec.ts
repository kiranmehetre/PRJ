import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SuffixWorksheet3Component } from './std03-suffix-worksheet3.component';

describe('Std03SuffixWorksheet3Component', () => {
  let component: Std03SuffixWorksheet3Component;
  let fixture: ComponentFixture<Std03SuffixWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SuffixWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SuffixWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
