import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedNounsWorksheet2Component } from './std02-mixed-nouns-worksheet2.component';

describe('Std02MixedNounsWorksheet2Component', () => {
  let component: Std02MixedNounsWorksheet2Component;
  let fixture: ComponentFixture<Std02MixedNounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedNounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedNounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
