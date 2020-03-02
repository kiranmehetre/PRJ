import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SuffixWorksheet4Component } from './std03-suffix-worksheet4.component';

describe('Std03SuffixWorksheet4Component', () => {
  let component: Std03SuffixWorksheet4Component;
  let fixture: ComponentFixture<Std03SuffixWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SuffixWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SuffixWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
