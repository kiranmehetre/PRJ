import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedNounsWorksheet5Component } from './std02-mixed-nouns-worksheet5.component';

describe('Std02MixedNounsWorksheet5Component', () => {
  let component: Std02MixedNounsWorksheet5Component;
  let fixture: ComponentFixture<Std02MixedNounsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedNounsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedNounsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
