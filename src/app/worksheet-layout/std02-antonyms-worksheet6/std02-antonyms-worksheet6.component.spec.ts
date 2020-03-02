import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AntonymsWorksheet6Component } from './std02-antonyms-worksheet6.component';

describe('Std02AntonymsWorksheet6Component', () => {
  let component: Std02AntonymsWorksheet6Component;
  let fixture: ComponentFixture<Std02AntonymsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AntonymsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AntonymsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
