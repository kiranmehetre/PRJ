import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AdjectiveWorksheet5Component } from './std01-adjective-worksheet5.component';

describe('Std01AdjectiveWorksheet5Component', () => {
  let component: Std01AdjectiveWorksheet5Component;
  let fixture: ComponentFixture<Std01AdjectiveWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AdjectiveWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AdjectiveWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
