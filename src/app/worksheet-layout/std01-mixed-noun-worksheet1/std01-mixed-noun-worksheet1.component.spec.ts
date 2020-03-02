import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedNounWorksheet1Component } from './std01-mixed-noun-worksheet1.component';

describe('Std01MixedNounWorksheet1Component', () => {
  let component: Std01MixedNounWorksheet1Component;
  let fixture: ComponentFixture<Std01MixedNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
