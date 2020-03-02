import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdverbsReferenceListComponent } from './std02-adverbs-reference-list.component';

describe('Std02AdverbsReferenceListComponent', () => {
  let component: Std02AdverbsReferenceListComponent;
  let fixture: ComponentFixture<Std02AdverbsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdverbsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdverbsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
