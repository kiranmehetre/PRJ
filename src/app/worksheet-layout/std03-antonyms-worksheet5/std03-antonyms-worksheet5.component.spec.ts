import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AntonymsWorksheet5Component } from './std03-antonyms-worksheet5.component';

describe('Std03AntonymsWorksheet5Component', () => {
  let component: Std03AntonymsWorksheet5Component;
  let fixture: ComponentFixture<Std03AntonymsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AntonymsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AntonymsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
