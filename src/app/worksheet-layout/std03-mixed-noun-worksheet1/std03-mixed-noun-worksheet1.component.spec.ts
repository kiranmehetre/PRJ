import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedNounWorksheet1Component } from './std03-mixed-noun-worksheet1.component';

describe('Std03MixedNounWorksheet1Component', () => {
  let component: Std03MixedNounWorksheet1Component;
  let fixture: ComponentFixture<Std03MixedNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
