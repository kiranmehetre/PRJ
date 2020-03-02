import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CompoundWordsWorksheet10Component } from './std02-compound-words-worksheet10.component';

describe('Std02CompoundWordsWorksheet10Component', () => {
  let component: Std02CompoundWordsWorksheet10Component;
  let fixture: ComponentFixture<Std02CompoundWordsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CompoundWordsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CompoundWordsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
