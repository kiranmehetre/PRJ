import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AbstractNounsReferenceListComponent } from './std03-abstract-nouns-reference-list.component';

describe('Std03AbstractNounsReferenceListComponent', () => {
  let component: Std03AbstractNounsReferenceListComponent;
  let fixture: ComponentFixture<Std03AbstractNounsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AbstractNounsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AbstractNounsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
