import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03GenderNounsReferenceListComponent } from './std03-gender-nouns-reference-list.component';

describe('Std03GenderNounsReferenceListComponent', () => {
  let component: Std03GenderNounsReferenceListComponent;
  let fixture: ComponentFixture<Std03GenderNounsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03GenderNounsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03GenderNounsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
