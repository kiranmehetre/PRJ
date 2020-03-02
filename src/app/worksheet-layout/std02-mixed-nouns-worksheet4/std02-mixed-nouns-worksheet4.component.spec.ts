import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedNounsWorksheet4Component } from './std02-mixed-nouns-worksheet4.component';

describe('Std02MixedNounsWorksheet4Component', () => {
  let component: Std02MixedNounsWorksheet4Component;
  let fixture: ComponentFixture<Std02MixedNounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedNounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedNounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
