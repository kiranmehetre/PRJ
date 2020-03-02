import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AntonymsWorksheet6Component } from './std01-antonyms-worksheet6.component';

describe('Std01AntonymsWorksheet6Component', () => {
  let component: Std01AntonymsWorksheet6Component;
  let fixture: ComponentFixture<Std01AntonymsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AntonymsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AntonymsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
