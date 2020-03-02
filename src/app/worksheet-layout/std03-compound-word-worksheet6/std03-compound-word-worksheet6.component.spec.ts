import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CompoundWordWorksheet6Component } from './std03-compound-word-worksheet6.component';

describe('Std03CompoundWordWorksheet6Component', () => {
  let component: Std03CompoundWordWorksheet6Component;
  let fixture: ComponentFixture<Std03CompoundWordWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CompoundWordWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CompoundWordWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
