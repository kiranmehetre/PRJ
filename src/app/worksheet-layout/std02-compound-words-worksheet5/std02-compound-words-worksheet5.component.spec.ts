import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CompoundWordsWorksheet5Component } from './std02-compound-words-worksheet5.component';

describe('Std02CompoundWordsWorksheet5Component', () => {
  let component: Std02CompoundWordsWorksheet5Component;
  let fixture: ComponentFixture<Std02CompoundWordsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CompoundWordsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CompoundWordsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
