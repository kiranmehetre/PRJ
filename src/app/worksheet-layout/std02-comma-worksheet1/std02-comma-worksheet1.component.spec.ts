import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CommaWorksheet1Component } from './std02-comma-worksheet1.component';

describe('Std02CommaWorksheet1Component', () => {
  let component: Std02CommaWorksheet1Component;
  let fixture: ComponentFixture<Std02CommaWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CommaWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CommaWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
