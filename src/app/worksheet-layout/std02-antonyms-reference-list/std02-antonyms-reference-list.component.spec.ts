import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AntonymsReferenceListComponent } from './std02-antonyms-reference-list.component';

describe('Std02AntonymsReferenceListComponent', () => {
  let component: Std02AntonymsReferenceListComponent;
  let fixture: ComponentFixture<Std02AntonymsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AntonymsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AntonymsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
