import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ComprehensionsWorksheet4Component } from './std01-comprehensions-worksheet4.component';

describe('Std01ComprehensionsWorksheet4Component', () => {
  let component: Std01ComprehensionsWorksheet4Component;
  let fixture: ComponentFixture<Std01ComprehensionsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ComprehensionsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ComprehensionsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
