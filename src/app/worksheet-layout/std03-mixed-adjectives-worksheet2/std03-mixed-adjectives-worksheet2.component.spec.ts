import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedAdjectivesWorksheet2Component } from './std03-mixed-adjectives-worksheet2.component';

describe('Std03MixedAdjectivesWorksheet2Component', () => {
  let component: Std03MixedAdjectivesWorksheet2Component;
  let fixture: ComponentFixture<Std03MixedAdjectivesWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedAdjectivesWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedAdjectivesWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
