import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdjectivesWorksheet3Component } from './std02-adjectives-worksheet3.component';

describe('Std02AdjectivesWorksheet3Component', () => {
  let component: Std02AdjectivesWorksheet3Component;
  let fixture: ComponentFixture<Std02AdjectivesWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdjectivesWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdjectivesWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
