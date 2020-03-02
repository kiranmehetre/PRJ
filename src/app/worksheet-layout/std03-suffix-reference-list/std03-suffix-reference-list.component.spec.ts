import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SuffixReferenceListComponent } from './std03-suffix-reference-list.component';

describe('Std03SuffixReferenceListComponent', () => {
  let component: Std03SuffixReferenceListComponent;
  let fixture: ComponentFixture<Std03SuffixReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SuffixReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SuffixReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
