import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CompoundWordsReferenceListComponent } from './std02-compound-words-reference-list.component';

describe('Std02CompoundWordsReferenceListComponent', () => {
  let component: Std02CompoundWordsReferenceListComponent;
  let fixture: ComponentFixture<Std02CompoundWordsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CompoundWordsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CompoundWordsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
