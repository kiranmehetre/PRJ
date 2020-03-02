import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AntonymsWorksheet3Component } from './std01-antonyms-worksheet3.component';

describe('Std01AntonymsWorksheet3Component', () => {
  let component: Std01AntonymsWorksheet3Component;
  let fixture: ComponentFixture<Std01AntonymsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AntonymsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AntonymsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
