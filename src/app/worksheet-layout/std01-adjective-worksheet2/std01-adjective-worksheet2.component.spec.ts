import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AdjectiveWorksheet2Component } from './std01-adjective-worksheet2.component';

describe('Std01AdjectiveWorksheet2Component', () => {
  let component: Std01AdjectiveWorksheet2Component;
  let fixture: ComponentFixture<Std01AdjectiveWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AdjectiveWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AdjectiveWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
