import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CompoundWordsReferenceListComponent } from './std01-compound-words-reference-list.component';

describe('Std01CompoundWordsReferenceListComponent', () => {
  let component: Std01CompoundWordsReferenceListComponent;
  let fixture: ComponentFixture<Std01CompoundWordsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CompoundWordsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CompoundWordsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
