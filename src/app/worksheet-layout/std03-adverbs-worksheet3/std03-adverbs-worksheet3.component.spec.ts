import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdverbsWorksheet3Component } from './std03-adverbs-worksheet3.component';

describe('Std03AdverbsWorksheet3Component', () => {
  let component: Std03AdverbsWorksheet3Component;
  let fixture: ComponentFixture<Std03AdverbsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdverbsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdverbsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
