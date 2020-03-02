import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ComprehensionsWorksheet3Component } from './std01-comprehensions-worksheet3.component';

describe('Std01ComprehensionsWorksheet3Component', () => {
  let component: Std01ComprehensionsWorksheet3Component;
  let fixture: ComponentFixture<Std01ComprehensionsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ComprehensionsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ComprehensionsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
