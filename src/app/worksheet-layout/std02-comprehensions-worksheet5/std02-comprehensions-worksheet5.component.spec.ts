import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ComprehensionsWorksheet5Component } from './std02-comprehensions-worksheet5.component';

describe('Std02ComprehensionsWorksheet5Component', () => {
  let component: Std02ComprehensionsWorksheet5Component;
  let fixture: ComponentFixture<Std02ComprehensionsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ComprehensionsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ComprehensionsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
