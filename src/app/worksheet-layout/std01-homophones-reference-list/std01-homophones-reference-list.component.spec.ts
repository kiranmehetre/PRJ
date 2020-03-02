import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HomophonesReferenceListComponent } from './std01-homophones-reference-list.component';

describe('Std01HomophonesReferenceListComponent', () => {
  let component: Std01HomophonesReferenceListComponent;
  let fixture: ComponentFixture<Std01HomophonesReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HomophonesReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HomophonesReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
