import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AntonymsReferenceListComponent } from './std01-antonyms-reference-list.component';

describe('Std01AntonymsReferenceListComponent', () => {
  let component: Std01AntonymsReferenceListComponent;
  let fixture: ComponentFixture<Std01AntonymsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AntonymsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AntonymsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
