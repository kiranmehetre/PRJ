import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ComprehensionsWorksheet7Component } from './std02-comprehensions-worksheet7.component';

describe('Std02ComprehensionsWorksheet7Component', () => {
  let component: Std02ComprehensionsWorksheet7Component;
  let fixture: ComponentFixture<Std02ComprehensionsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ComprehensionsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ComprehensionsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
