import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdverbsWorksheet2Component } from './std03-adverbs-worksheet2.component';

describe('Std03AdverbsWorksheet2Component', () => {
  let component: Std03AdverbsWorksheet2Component;
  let fixture: ComponentFixture<Std03AdverbsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdverbsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdverbsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
