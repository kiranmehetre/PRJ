import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedAdjectivesWorksheet4Component } from './std03-mixed-adjectives-worksheet4.component';

describe('Std03MixedAdjectivesWorksheet4Component', () => {
  let component: Std03MixedAdjectivesWorksheet4Component;
  let fixture: ComponentFixture<Std03MixedAdjectivesWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedAdjectivesWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedAdjectivesWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
