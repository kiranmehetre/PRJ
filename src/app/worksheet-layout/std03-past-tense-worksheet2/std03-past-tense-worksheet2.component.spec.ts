import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PastTenseWorksheet2Component } from './std03-past-tense-worksheet2.component';

describe('Std03PastTenseWorksheet2Component', () => {
  let component: Std03PastTenseWorksheet2Component;
  let fixture: ComponentFixture<Std03PastTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PastTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PastTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
