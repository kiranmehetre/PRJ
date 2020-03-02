import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CollectiveNounsReferenceListComponent } from './std01-collective-nouns-reference-list.component';

describe('Std01CollectiveNounsReferenceListComponent', () => {
  let component: Std01CollectiveNounsReferenceListComponent;
  let fixture: ComponentFixture<Std01CollectiveNounsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CollectiveNounsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CollectiveNounsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
