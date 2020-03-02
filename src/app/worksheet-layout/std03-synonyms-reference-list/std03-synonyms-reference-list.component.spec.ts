import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SynonymsReferenceListComponent } from './std03-synonyms-reference-list.component';

describe('Std03SynonymsReferenceListComponent', () => {
  let component: Std03SynonymsReferenceListComponent;
  let fixture: ComponentFixture<Std03SynonymsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SynonymsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SynonymsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
