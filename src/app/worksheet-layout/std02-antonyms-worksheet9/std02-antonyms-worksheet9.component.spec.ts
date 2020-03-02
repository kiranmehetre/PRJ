import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AntonymsWorksheet9Component } from './std02-antonyms-worksheet9.component';

describe('Std02AntonymsWorksheet9Component', () => {
  let component: Std02AntonymsWorksheet9Component;
  let fixture: ComponentFixture<Std02AntonymsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AntonymsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AntonymsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
