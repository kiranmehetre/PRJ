import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CompoundWordsWorksheet7Component } from './std02-compound-words-worksheet7.component';

describe('Std02CompoundWordsWorksheet7Component', () => {
  let component: Std02CompoundWordsWorksheet7Component;
  let fixture: ComponentFixture<Std02CompoundWordsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CompoundWordsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CompoundWordsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
