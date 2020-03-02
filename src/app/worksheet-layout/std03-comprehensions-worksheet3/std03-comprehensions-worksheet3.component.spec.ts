import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ComprehensionsWorksheet3Component } from './std03-comprehensions-worksheet3.component';

describe('Std03ComprehensionsWorksheet3Component', () => {
  let component: Std03ComprehensionsWorksheet3Component;
  let fixture: ComponentFixture<Std03ComprehensionsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ComprehensionsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ComprehensionsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
