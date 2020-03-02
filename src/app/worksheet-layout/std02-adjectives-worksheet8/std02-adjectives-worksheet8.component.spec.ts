import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdjectivesWorksheet8Component } from './std02-adjectives-worksheet8.component';

describe('Std02AdjectivesWorksheet8Component', () => {
  let component: Std02AdjectivesWorksheet8Component;
  let fixture: ComponentFixture<Std02AdjectivesWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdjectivesWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdjectivesWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
