import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ComprehensionsWorksheet3Component } from './std02-comprehensions-worksheet3.component';

describe('Std02ComprehensionsWorksheet3Component', () => {
  let component: Std02ComprehensionsWorksheet3Component;
  let fixture: ComponentFixture<Std02ComprehensionsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ComprehensionsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ComprehensionsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
