import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ComprehensionsWorksheet7Component } from './std03-comprehensions-worksheet7.component';

describe('Std03ComprehensionsWorksheet7Component', () => {
  let component: Std03ComprehensionsWorksheet7Component;
  let fixture: ComponentFixture<Std03ComprehensionsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ComprehensionsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ComprehensionsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
