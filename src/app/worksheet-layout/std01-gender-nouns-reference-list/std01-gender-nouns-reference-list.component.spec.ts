import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01GenderNounsReferenceListComponent } from './std01-gender-nouns-reference-list.component';

describe('Std01GenderNounsReferenceListComponent', () => {
  let component: Std01GenderNounsReferenceListComponent;
  let fixture: ComponentFixture<Std01GenderNounsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01GenderNounsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01GenderNounsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
