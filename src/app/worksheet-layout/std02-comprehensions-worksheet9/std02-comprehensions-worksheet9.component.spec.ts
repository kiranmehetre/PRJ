import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ComprehensionsWorksheet9Component } from './std02-comprehensions-worksheet9.component';

describe('Std02ComprehensionsWorksheet9Component', () => {
  let component: Std02ComprehensionsWorksheet9Component;
  let fixture: ComponentFixture<Std02ComprehensionsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ComprehensionsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ComprehensionsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
