import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CompoundWordWorksheet1Component } from './std03-compound-word-worksheet1.component';

describe('Std03CompoundWordWorksheet1Component', () => {
  let component: Std03CompoundWordWorksheet1Component;
  let fixture: ComponentFixture<Std03CompoundWordWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CompoundWordWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CompoundWordWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
