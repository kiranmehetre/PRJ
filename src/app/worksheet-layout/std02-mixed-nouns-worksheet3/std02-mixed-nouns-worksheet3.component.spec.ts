import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedNounsWorksheet3Component } from './std02-mixed-nouns-worksheet3.component';

describe('Std02MixedNounsWorksheet3Component', () => {
  let component: Std02MixedNounsWorksheet3Component;
  let fixture: ComponentFixture<Std02MixedNounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedNounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedNounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
