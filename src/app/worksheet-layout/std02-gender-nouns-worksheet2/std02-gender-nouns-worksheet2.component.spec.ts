import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02GenderNounsWorksheet2Component } from './std02-gender-nouns-worksheet2.component';

describe('Std02GenderNounsWorksheet2Component', () => {
  let component: Std02GenderNounsWorksheet2Component;
  let fixture: ComponentFixture<Std02GenderNounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02GenderNounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02GenderNounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
