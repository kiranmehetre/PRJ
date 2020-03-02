import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PastTenseWorksheet3Component } from './std03-past-tense-worksheet3.component';

describe('Std03PastTenseWorksheet3Component', () => {
  let component: Std03PastTenseWorksheet3Component;
  let fixture: ComponentFixture<Std03PastTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PastTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PastTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
