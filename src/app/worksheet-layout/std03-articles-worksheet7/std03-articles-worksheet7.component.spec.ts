import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ArticlesWorksheet7Component } from './std03-articles-worksheet7.component';

describe('Std03ArticlesWorksheet7Component', () => {
  let component: Std03ArticlesWorksheet7Component;
  let fixture: ComponentFixture<Std03ArticlesWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ArticlesWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ArticlesWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
