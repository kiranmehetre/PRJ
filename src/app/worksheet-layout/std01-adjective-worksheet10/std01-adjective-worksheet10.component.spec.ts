import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AdjectiveWorksheet10Component } from './std01-adjective-worksheet10.component';

describe('Std01AdjectiveWorksheet10Component', () => {
  let component: Std01AdjectiveWorksheet10Component;
  let fixture: ComponentFixture<Std01AdjectiveWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AdjectiveWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AdjectiveWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
