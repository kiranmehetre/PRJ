import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AntonymsReferenceListComponent } from './std03-antonyms-reference-list.component';

describe('Std03AntonymsReferenceListComponent', () => {
  let component: Std03AntonymsReferenceListComponent;
  let fixture: ComponentFixture<Std03AntonymsReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AntonymsReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AntonymsReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
