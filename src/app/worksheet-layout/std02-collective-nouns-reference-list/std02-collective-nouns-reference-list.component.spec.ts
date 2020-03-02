import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CollectiveNounsReferenceListComponent } from './std02-collective-nouns-reference-list.component';

describe('Std02CollectiveNounsReferenceListComponent', () => {
  let component: Std02CollectiveNounsReferenceListComponent;
  let fixture: ComponentFixture<Std02CollectiveNounsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CollectiveNounsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CollectiveNounsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
