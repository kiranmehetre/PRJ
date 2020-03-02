import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedAdjectivesWorksheet1Component } from './std03-mixed-adjectives-worksheet1.component';

describe('Std03MixedAdjectivesWorksheet1Component', () => {
  let component: Std03MixedAdjectivesWorksheet1Component;
  let fixture: ComponentFixture<Std03MixedAdjectivesWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedAdjectivesWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedAdjectivesWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
