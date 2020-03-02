import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ArticlesWorksheet6Component } from './std03-articles-worksheet6.component';

describe('Std03ArticlesWorksheet6Component', () => {
  let component: Std03ArticlesWorksheet6Component;
  let fixture: ComponentFixture<Std03ArticlesWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ArticlesWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ArticlesWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
