import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ComprehensionsWorksheet5Component } from './std01-comprehensions-worksheet5.component';

describe('Std01ComprehensionsWorksheet5Component', () => {
  let component: Std01ComprehensionsWorksheet5Component;
  let fixture: ComponentFixture<Std01ComprehensionsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ComprehensionsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ComprehensionsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
