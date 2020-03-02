import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ComprehensionsWorksheet10Component } from './std02-comprehensions-worksheet10.component';

describe('Std02ComprehensionsWorksheet10Component', () => {
  let component: Std02ComprehensionsWorksheet10Component;
  let fixture: ComponentFixture<Std02ComprehensionsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ComprehensionsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ComprehensionsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
