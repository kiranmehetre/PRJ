import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AdjectiveWorksheet1Component } from './std01-adjective-worksheet1.component';

describe('Std01AdjectiveWorksheet1Component', () => {
  let component: Std01AdjectiveWorksheet1Component;
  let fixture: ComponentFixture<Std01AdjectiveWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AdjectiveWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AdjectiveWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
