import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdjectivesWorksheet6Component } from './std02-adjectives-worksheet6.component';

describe('Std02AdjectivesWorksheet6Component', () => {
  let component: Std02AdjectivesWorksheet6Component;
  let fixture: ComponentFixture<Std02AdjectivesWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdjectivesWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdjectivesWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
