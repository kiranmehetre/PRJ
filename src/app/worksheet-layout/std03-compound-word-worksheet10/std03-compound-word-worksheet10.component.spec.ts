import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CompoundWordWorksheet10Component } from './std03-compound-word-worksheet10.component';

describe('Std03CompoundWordWorksheet10Component', () => {
  let component: Std03CompoundWordWorksheet10Component;
  let fixture: ComponentFixture<Std03CompoundWordWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CompoundWordWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CompoundWordWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
