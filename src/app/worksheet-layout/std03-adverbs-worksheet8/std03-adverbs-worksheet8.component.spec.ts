import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdverbsWorksheet8Component } from './std03-adverbs-worksheet8.component';

describe('Std03AdverbsWorksheet8Component', () => {
  let component: Std03AdverbsWorksheet8Component;
  let fixture: ComponentFixture<Std03AdverbsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdverbsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdverbsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
