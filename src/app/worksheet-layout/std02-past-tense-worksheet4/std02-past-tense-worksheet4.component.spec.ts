import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PastTenseWorksheet4Component } from './std02-past-tense-worksheet4.component';

describe('Std02PastTenseWorksheet4Component', () => {
  let component: Std02PastTenseWorksheet4Component;
  let fixture: ComponentFixture<Std02PastTenseWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PastTenseWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PastTenseWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
