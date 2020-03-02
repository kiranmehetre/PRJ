import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ComprehensionsWorksheet4Component } from './std03-comprehensions-worksheet4.component';

describe('Std03ComprehensionsWorksheet4Component', () => {
  let component: Std03ComprehensionsWorksheet4Component;
  let fixture: ComponentFixture<Std03ComprehensionsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ComprehensionsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ComprehensionsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
