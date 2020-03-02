import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ArticlesWorksheet10Component } from './std03-articles-worksheet10.component';

describe('Std03ArticlesWorksheet10Component', () => {
  let component: Std03ArticlesWorksheet10Component;
  let fixture: ComponentFixture<Std03ArticlesWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ArticlesWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ArticlesWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
