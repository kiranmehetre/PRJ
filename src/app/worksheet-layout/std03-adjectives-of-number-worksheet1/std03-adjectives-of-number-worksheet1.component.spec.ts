import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdjectivesOfNumberWorksheet1Component } from './std03-adjectives-of-number-worksheet1.component';

describe('Std03AdjectivesOfNumberWorksheet1Component', () => {
  let component: Std03AdjectivesOfNumberWorksheet1Component;
  let fixture: ComponentFixture<Std03AdjectivesOfNumberWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdjectivesOfNumberWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdjectivesOfNumberWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
