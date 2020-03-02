import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedNounWorksheet3Component } from './std01-mixed-noun-worksheet3.component';

describe('Std01MixedNounWorksheet3Component', () => {
  let component: Std01MixedNounWorksheet3Component;
  let fixture: ComponentFixture<Std01MixedNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
