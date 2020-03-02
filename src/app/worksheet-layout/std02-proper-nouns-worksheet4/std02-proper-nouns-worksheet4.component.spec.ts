import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ProperNounsWorksheet4Component } from './std02-proper-nouns-worksheet4.component';

describe('Std02ProperNounsWorksheet4Component', () => {
  let component: Std02ProperNounsWorksheet4Component;
  let fixture: ComponentFixture<Std02ProperNounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ProperNounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ProperNounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
