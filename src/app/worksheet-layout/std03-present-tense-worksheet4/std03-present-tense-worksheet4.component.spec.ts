import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PresentTenseWorksheet4Component } from './std03-present-tense-worksheet4.component';

describe('Std03PresentTenseWorksheet4Component', () => {
  let component: Std03PresentTenseWorksheet4Component;
  let fixture: ComponentFixture<Std03PresentTenseWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PresentTenseWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PresentTenseWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
