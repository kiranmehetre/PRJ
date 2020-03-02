import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ComprehensionsWorksheet8Component } from './std01-comprehensions-worksheet8.component';

describe('Std01ComprehensionsWorksheet8Component', () => {
  let component: Std01ComprehensionsWorksheet8Component;
  let fixture: ComponentFixture<Std01ComprehensionsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ComprehensionsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ComprehensionsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
