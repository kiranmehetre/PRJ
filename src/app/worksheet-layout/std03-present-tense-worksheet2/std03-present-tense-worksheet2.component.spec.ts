import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PresentTenseWorksheet2Component } from './std03-present-tense-worksheet2.component';

describe('Std03PresentTenseWorksheet2Component', () => {
  let component: Std03PresentTenseWorksheet2Component;
  let fixture: ComponentFixture<Std03PresentTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PresentTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PresentTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
