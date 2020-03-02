import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CollectiveNounsReferenceListComponent } from './std03-collective-nouns-reference-list.component';

describe('Std03CollectiveNounsReferenceListComponent', () => {
  let component: Std03CollectiveNounsReferenceListComponent;
  let fixture: ComponentFixture<Std03CollectiveNounsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CollectiveNounsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CollectiveNounsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
