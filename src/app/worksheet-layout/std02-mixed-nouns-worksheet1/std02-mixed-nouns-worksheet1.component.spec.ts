import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedNounsWorksheet1Component } from './std02-mixed-nouns-worksheet1.component';

describe('Std02MixedNounsWorksheet1Component', () => {
  let component: Std02MixedNounsWorksheet1Component;
  let fixture: ComponentFixture<Std02MixedNounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedNounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedNounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
