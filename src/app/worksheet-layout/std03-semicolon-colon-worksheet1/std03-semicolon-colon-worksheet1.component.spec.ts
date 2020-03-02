import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SemicolonColonWorksheet1Component } from './std03-semicolon-colon-worksheet1.component';

describe('Std03SemicolonColonWorksheet1Component', () => {
  let component: Std03SemicolonColonWorksheet1Component;
  let fixture: ComponentFixture<Std03SemicolonColonWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SemicolonColonWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SemicolonColonWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
