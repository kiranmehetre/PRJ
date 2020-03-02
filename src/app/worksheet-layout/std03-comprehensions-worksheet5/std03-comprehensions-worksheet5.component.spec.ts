import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ComprehensionsWorksheet5Component } from './std03-comprehensions-worksheet5.component';

describe('Std03ComprehensionsWorksheet5Component', () => {
  let component: Std03ComprehensionsWorksheet5Component;
  let fixture: ComponentFixture<Std03ComprehensionsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ComprehensionsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ComprehensionsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
