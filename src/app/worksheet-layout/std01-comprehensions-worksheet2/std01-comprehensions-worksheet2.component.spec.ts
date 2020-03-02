import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ComprehensionsWorksheet2Component } from './std01-comprehensions-worksheet2.component';

describe('Std01ComprehensionsWorksheet2Component', () => {
  let component: Std01ComprehensionsWorksheet2Component;
  let fixture: ComponentFixture<Std01ComprehensionsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ComprehensionsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ComprehensionsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
