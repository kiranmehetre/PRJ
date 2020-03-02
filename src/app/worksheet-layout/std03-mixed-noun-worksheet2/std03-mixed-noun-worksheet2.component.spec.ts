import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedNounWorksheet2Component } from './std03-mixed-noun-worksheet2.component';

describe('Std03MixedNounWorksheet2Component', () => {
  let component: Std03MixedNounWorksheet2Component;
  let fixture: ComponentFixture<Std03MixedNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
