import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdverbsReferenceListComponent } from './std03-adverbs-reference-list.component';

describe('Std03AdverbsReferenceListComponent', () => {
  let component: Std03AdverbsReferenceListComponent;
  let fixture: ComponentFixture<Std03AdverbsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdverbsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdverbsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
