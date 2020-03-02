import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AntonymsWorksheet10Component } from './std02-antonyms-worksheet10.component';

describe('Std02AntonymsWorksheet10Component', () => {
  let component: Std02AntonymsWorksheet10Component;
  let fixture: ComponentFixture<Std02AntonymsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AntonymsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AntonymsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
