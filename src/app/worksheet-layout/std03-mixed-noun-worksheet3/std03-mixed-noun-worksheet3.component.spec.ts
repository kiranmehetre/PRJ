import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedNounWorksheet3Component } from './std03-mixed-noun-worksheet3.component';

describe('Std03MixedNounWorksheet3Component', () => {
  let component: Std03MixedNounWorksheet3Component;
  let fixture: ComponentFixture<Std03MixedNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
