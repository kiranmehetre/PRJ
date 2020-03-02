import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdjectivesOfQualityWorksheet2Component } from './std03-adjectives-of-quality-worksheet2.component';

describe('Std03AdjectivesOfQualityWorksheet2Component', () => {
  let component: Std03AdjectivesOfQualityWorksheet2Component;
  let fixture: ComponentFixture<Std03AdjectivesOfQualityWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdjectivesOfQualityWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdjectivesOfQualityWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
