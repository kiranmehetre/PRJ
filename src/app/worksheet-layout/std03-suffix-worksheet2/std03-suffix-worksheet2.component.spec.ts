import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SuffixWorksheet2Component } from './std03-suffix-worksheet2.component';

describe('Std03SuffixWorksheet2Component', () => {
  let component: Std03SuffixWorksheet2Component;
  let fixture: ComponentFixture<Std03SuffixWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SuffixWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SuffixWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
