import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PastTenseWorksheet1Component } from './std03-past-tense-worksheet1.component';

describe('Std03PastTenseWorksheet1Component', () => {
  let component: Std03PastTenseWorksheet1Component;
  let fixture: ComponentFixture<Std03PastTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PastTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PastTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
