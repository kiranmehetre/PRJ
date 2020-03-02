import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdjectivesOfQualityWorksheet1Component } from './std03-adjectives-of-quality-worksheet1.component';

describe('Std03AdjectivesOfQualityWorksheet1Component', () => {
  let component: Std03AdjectivesOfQualityWorksheet1Component;
  let fixture: ComponentFixture<Std03AdjectivesOfQualityWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdjectivesOfQualityWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdjectivesOfQualityWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
