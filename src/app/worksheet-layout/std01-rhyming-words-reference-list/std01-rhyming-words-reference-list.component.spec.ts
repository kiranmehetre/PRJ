import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsReferenceListComponent } from './std01-rhyming-words-reference-list.component';

describe('Std01RhymingWordsReferenceListComponent', () => {
  let component: Std01RhymingWordsReferenceListComponent;
  let fixture: ComponentFixture<Std01RhymingWordsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
