import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedAdjectivesWorksheet3Component } from './std03-mixed-adjectives-worksheet3.component';

describe('Std03MixedAdjectivesWorksheet3Component', () => {
  let component: Std03MixedAdjectivesWorksheet3Component;
  let fixture: ComponentFixture<Std03MixedAdjectivesWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedAdjectivesWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedAdjectivesWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
