import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PresentTenseWorksheet1Component } from './std03-present-tense-worksheet1.component';

describe('Std03PresentTenseWorksheet1Component', () => {
  let component: Std03PresentTenseWorksheet1Component;
  let fixture: ComponentFixture<Std03PresentTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PresentTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PresentTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
