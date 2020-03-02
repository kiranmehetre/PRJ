import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedTenseWorksheet3Component } from './std01-mixed-tense-worksheet3.component';

describe('Std01MixedTenseWorksheet3Component', () => {
  let component: Std01MixedTenseWorksheet3Component;
  let fixture: ComponentFixture<Std01MixedTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
