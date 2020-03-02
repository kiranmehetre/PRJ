import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02GenderNounsWorksheet10Component } from './std02-gender-nouns-worksheet10.component';

describe('Std02GenderNounsWorksheet10Component', () => {
  let component: Std02GenderNounsWorksheet10Component;
  let fixture: ComponentFixture<Std02GenderNounsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02GenderNounsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02GenderNounsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
