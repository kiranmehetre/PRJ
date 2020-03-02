import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02RhymingWordsReferenceListComponent } from './std02-rhyming-words-reference-list.component';

describe('Std02RhymingWordsReferenceListComponent', () => {
  let component: Std02RhymingWordsReferenceListComponent;
  let fixture: ComponentFixture<Std02RhymingWordsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02RhymingWordsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02RhymingWordsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
