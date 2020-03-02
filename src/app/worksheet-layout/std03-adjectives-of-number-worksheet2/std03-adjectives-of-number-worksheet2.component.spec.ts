import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdjectivesOfNumberWorksheet2Component } from './std03-adjectives-of-number-worksheet2.component';

describe('Std03AdjectivesOfNumberWorksheet2Component', () => {
  let component: Std03AdjectivesOfNumberWorksheet2Component;
  let fixture: ComponentFixture<Std03AdjectivesOfNumberWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdjectivesOfNumberWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdjectivesOfNumberWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
