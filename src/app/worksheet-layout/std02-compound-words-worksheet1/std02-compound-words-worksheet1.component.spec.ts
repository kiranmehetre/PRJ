import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CompoundWordsWorksheet1Component } from './std02-compound-words-worksheet1.component';

describe('Std02CompoundWordsWorksheet1Component', () => {
  let component: Std02CompoundWordsWorksheet1Component;
  let fixture: ComponentFixture<Std02CompoundWordsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CompoundWordsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CompoundWordsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
