import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CompoundWordsWorksheet10Component } from './std01-compound-words-worksheet10.component';

describe('Std01CompoundWordsWorksheet1Component', () => {
  let component: Std01CompoundWordsWorksheet10Component;
  let fixture: ComponentFixture<Std01CompoundWordsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CompoundWordsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CompoundWordsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
