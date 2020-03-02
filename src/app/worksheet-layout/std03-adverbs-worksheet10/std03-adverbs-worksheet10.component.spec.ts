import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdverbsWorksheet10Component } from './std03-adverbs-worksheet10.component';

describe('Std03AdverbsWorksheet10Component', () => {
  let component: Std03AdverbsWorksheet10Component;
  let fixture: ComponentFixture<Std03AdverbsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdverbsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdverbsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
