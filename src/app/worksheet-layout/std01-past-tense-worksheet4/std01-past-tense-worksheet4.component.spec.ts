import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PastTenseWorksheet4Component } from './std01-past-tense-worksheet4.component';

describe('Std01PastTenseWorksheet4Component', () => {
  let component: Std01PastTenseWorksheet4Component;
  let fixture: ComponentFixture<Std01PastTenseWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PastTenseWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PastTenseWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
