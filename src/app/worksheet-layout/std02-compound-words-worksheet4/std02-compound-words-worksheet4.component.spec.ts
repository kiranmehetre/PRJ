import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CompoundWordsWorksheet4Component } from './std02-compound-words-worksheet4.component';

describe('Std02CompoundWordsWorksheet4Component', () => {
  let component: Std02CompoundWordsWorksheet4Component;
  let fixture: ComponentFixture<Std02CompoundWordsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CompoundWordsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CompoundWordsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
