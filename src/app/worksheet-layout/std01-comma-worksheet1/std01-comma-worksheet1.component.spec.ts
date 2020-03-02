import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CommaWorksheet1Component } from './std01-comma-worksheet1.component';

describe('Std01CommaWorksheet1Component', () => {
  let component: Std01CommaWorksheet1Component;
  let fixture: ComponentFixture<Std01CommaWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CommaWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CommaWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
