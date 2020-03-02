import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AntonymsWorksheet8Component } from './std03-antonyms-worksheet8.component';

describe('Std03AntonymsWorksheet8Component', () => {
  let component: Std03AntonymsWorksheet8Component;
  let fixture: ComponentFixture<Std03AntonymsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AntonymsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AntonymsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
