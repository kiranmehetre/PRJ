import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CompoundWordsReferenceListComponent } from './std03-compound-words-reference-list.component';

describe('Std03CompoundWordsReferenceListComponent', () => {
  let component: Std03CompoundWordsReferenceListComponent;
  let fixture: ComponentFixture<Std03CompoundWordsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CompoundWordsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CompoundWordsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
