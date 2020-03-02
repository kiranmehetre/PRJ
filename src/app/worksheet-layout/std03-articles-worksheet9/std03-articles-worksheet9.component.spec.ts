import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ArticlesWorksheet9Component } from './std03-articles-worksheet9.component';

describe('Std03ArticlesWorksheet9Component', () => {
  let component: Std03ArticlesWorksheet9Component;
  let fixture: ComponentFixture<Std03ArticlesWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ArticlesWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ArticlesWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
