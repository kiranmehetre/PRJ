import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ArticlesWorksheet1Component } from './std03-articles-worksheet1.component';

describe('Std03ArticlesWorksheet1Component', () => {
  let component: Std03ArticlesWorksheet1Component;
  let fixture: ComponentFixture<Std03ArticlesWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ArticlesWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ArticlesWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
