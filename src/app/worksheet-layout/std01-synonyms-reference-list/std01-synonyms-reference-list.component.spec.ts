import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SynonymsReferenceListComponent } from './std01-synonyms-reference-list.component';

describe('Std01SynonymsReferenceListComponent', () => {
  let component: Std01SynonymsReferenceListComponent;
  let fixture: ComponentFixture<Std01SynonymsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SynonymsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SynonymsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
