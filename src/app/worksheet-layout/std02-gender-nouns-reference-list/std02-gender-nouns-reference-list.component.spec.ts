import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02GenderNounsReferenceListComponent } from './std02-gender-nouns-reference-list.component';

describe('Std02GenderNounsReferenceListComponent', () => {
  let component: Std02GenderNounsReferenceListComponent;
  let fixture: ComponentFixture<Std02GenderNounsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02GenderNounsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02GenderNounsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
