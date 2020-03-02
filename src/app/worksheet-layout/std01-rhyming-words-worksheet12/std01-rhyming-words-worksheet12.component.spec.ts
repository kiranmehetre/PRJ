import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet12Component } from './std01-rhyming-words-worksheet12.component';

describe('Std01RhymingWordsWorksheet12Component', () => {
  let component: Std01RhymingWordsWorksheet12Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
