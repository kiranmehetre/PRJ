import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ComprehensionsWorksheet1Component } from './std03-comprehensions-worksheet1.component';

describe('Std03ComprehensionsWorksheet1Component', () => {
  let component: Std03ComprehensionsWorksheet1Component;
  let fixture: ComponentFixture<Std03ComprehensionsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ComprehensionsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ComprehensionsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
