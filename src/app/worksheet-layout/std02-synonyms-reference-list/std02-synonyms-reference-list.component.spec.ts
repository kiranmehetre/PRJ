import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SynonymsReferenceListComponent } from './std02-synonyms-reference-list.component';

describe('Std02SynonymsReferenceListComponent', () => {
  let component: Std02SynonymsReferenceListComponent;
  let fixture: ComponentFixture<Std02SynonymsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SynonymsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SynonymsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
