import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AntonymsWorksheet7Component } from './std02-antonyms-worksheet7.component';

describe('Std02AntonymsWorksheet7Component', () => {
  let component: Std02AntonymsWorksheet7Component;
  let fixture: ComponentFixture<Std02AntonymsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AntonymsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AntonymsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
