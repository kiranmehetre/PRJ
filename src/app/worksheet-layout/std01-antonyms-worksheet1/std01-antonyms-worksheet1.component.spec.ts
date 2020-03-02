import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AntonymsWorksheet1Component } from './std01-antonyms-worksheet1.component';

describe('Std01AntonymsWorksheet1Component', () => {
  let component: Std01AntonymsWorksheet1Component;
  let fixture: ComponentFixture<Std01AntonymsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AntonymsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AntonymsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
