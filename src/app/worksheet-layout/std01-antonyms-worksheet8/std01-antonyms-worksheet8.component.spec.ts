import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AntonymsWorksheet8Component } from './std01-antonyms-worksheet8.component';

describe('Std01AntonymsWorksheet8Component', () => {
  let component: Std01AntonymsWorksheet8Component;
  let fixture: ComponentFixture<Std01AntonymsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AntonymsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AntonymsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
