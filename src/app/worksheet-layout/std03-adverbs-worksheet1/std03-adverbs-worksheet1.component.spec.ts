import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdverbsWorksheet1Component } from './std03-adverbs-worksheet1.component';

describe('Std03AdverbsWorksheet1Component', () => {
  let component: Std03AdverbsWorksheet1Component;
  let fixture: ComponentFixture<Std03AdverbsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdverbsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdverbsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
