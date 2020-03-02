import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AntonymsWorksheet6Component } from './std03-antonyms-worksheet6.component';

describe('Std03AntonymsWorksheet6Component', () => {
  let component: Std03AntonymsWorksheet6Component;
  let fixture: ComponentFixture<Std03AntonymsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AntonymsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AntonymsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
