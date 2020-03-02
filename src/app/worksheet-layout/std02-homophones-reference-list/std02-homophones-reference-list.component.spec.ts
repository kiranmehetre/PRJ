import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HomophonesReferenceListComponent } from './std02-homophones-reference-list.component';

describe('Std02HomophonesReferenceListComponent', () => {
  let component: Std02HomophonesReferenceListComponent;
  let fixture: ComponentFixture<Std02HomophonesReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HomophonesReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HomophonesReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
