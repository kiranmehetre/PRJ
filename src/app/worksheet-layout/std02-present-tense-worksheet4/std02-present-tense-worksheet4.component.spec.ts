import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PresentTenseWorksheet4Component } from './std02-present-tense-worksheet4.component';

describe('Std02PresentTenseWorksheet4Component', () => {
  let component: Std02PresentTenseWorksheet4Component;
  let fixture: ComponentFixture<Std02PresentTenseWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PresentTenseWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PresentTenseWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
