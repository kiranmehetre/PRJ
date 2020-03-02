import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CommaWorksheet2Component } from './std02-comma-worksheet2.component';

describe('Std02CommaWorksheet2Component', () => {
  let component: Std02CommaWorksheet2Component;
  let fixture: ComponentFixture<Std02CommaWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CommaWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CommaWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
