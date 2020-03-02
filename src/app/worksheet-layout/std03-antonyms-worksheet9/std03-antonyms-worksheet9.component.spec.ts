import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AntonymsWorksheet9Component } from './std03-antonyms-worksheet9.component';

describe('Std03AntonymsWorksheet9Component', () => {
  let component: Std03AntonymsWorksheet9Component;
  let fixture: ComponentFixture<Std03AntonymsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AntonymsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AntonymsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
