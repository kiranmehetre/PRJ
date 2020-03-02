import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HomophonesReferenceListComponent } from './std03-homophones-reference-list.component';

describe('Std03HomophonesReferenceListComponent', () => {
  let component: Std03HomophonesReferenceListComponent;
  let fixture: ComponentFixture<Std03HomophonesReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HomophonesReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HomophonesReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
