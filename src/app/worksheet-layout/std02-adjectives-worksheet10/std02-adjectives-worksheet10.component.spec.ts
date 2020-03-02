import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdjectivesWorksheet10Component } from './std02-adjectives-worksheet10.component';

describe('Std02AdjectivesWorksheet10Component', () => {
  let component: Std02AdjectivesWorksheet10Component;
  let fixture: ComponentFixture<Std02AdjectivesWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdjectivesWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdjectivesWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
