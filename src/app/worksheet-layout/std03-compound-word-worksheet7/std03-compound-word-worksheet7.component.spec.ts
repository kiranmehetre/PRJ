import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CompoundWordWorksheet7Component } from './std03-compound-word-worksheet7.component';

describe('Std03CompoundWordWorksheet7Component', () => {
  let component: Std03CompoundWordWorksheet7Component;
  let fixture: ComponentFixture<Std03CompoundWordWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CompoundWordWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CompoundWordWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
