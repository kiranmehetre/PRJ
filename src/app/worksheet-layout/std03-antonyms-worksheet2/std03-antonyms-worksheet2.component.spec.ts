import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AntonymsWorksheet2Component } from './std03-antonyms-worksheet2.component';

describe('Std03AntonymsWorksheet2Component', () => {
  let component: Std03AntonymsWorksheet2Component;
  let fixture: ComponentFixture<Std03AntonymsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AntonymsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AntonymsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
