import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedTenseWorksheet3Component } from './std03-mixed-tense-worksheet3.component';

describe('Std03MixedTenseWorksheet3Component', () => {
  let component: Std03MixedTenseWorksheet3Component;
  let fixture: ComponentFixture<Std03MixedTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
