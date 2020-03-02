import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PresentTenseWorksheet4Component } from './std01-present-tense-worksheet4.component';

describe('Std01PresentTenseWorksheet4Component', () => {
  let component: Std01PresentTenseWorksheet4Component;
  let fixture: ComponentFixture<Std01PresentTenseWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PresentTenseWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PresentTenseWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
