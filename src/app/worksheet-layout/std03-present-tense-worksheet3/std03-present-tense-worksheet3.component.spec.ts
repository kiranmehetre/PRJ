import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PresentTenseWorksheet3Component } from './std03-present-tense-worksheet3.component';

describe('Std03PresentTenseWorksheet3Component', () => {
  let component: Std03PresentTenseWorksheet3Component;
  let fixture: ComponentFixture<Std03PresentTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PresentTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PresentTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
