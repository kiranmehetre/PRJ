import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01AntonymsWorksheet9Component } from './std01-antonyms-worksheet9.component';

describe('Std01AntonymsWorksheet9Component', () => {
  let component: Std01AntonymsWorksheet9Component;
  let fixture: ComponentFixture<Std01AntonymsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01AntonymsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01AntonymsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
