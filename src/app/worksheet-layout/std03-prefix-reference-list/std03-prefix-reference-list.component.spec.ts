import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrefixReferenceListComponent } from './std03-prefix-reference-list.component';

describe('Std03PrefixReferenceListComponent', () => {
  let component: Std03PrefixReferenceListComponent;
  let fixture: ComponentFixture<Std03PrefixReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrefixReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrefixReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
