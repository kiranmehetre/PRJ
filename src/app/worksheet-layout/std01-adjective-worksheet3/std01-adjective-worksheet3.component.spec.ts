import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AdjectiveWorksheet3Component } from './std01-adjective-worksheet3.component';

describe('Std01AdjectiveWorksheet3Component', () => {
  let component: Std01AdjectiveWorksheet3Component;
  let fixture: ComponentFixture<Std01AdjectiveWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AdjectiveWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AdjectiveWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
