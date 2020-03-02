import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CommaWorksheet1Component } from './std03-comma-worksheet1.component';

describe('Std03CommaWorksheet1Component', () => {
  let component: Std03CommaWorksheet1Component;
  let fixture: ComponentFixture<Std03CommaWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CommaWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CommaWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
