import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CompoundWordWorksheet9Component } from './std03-compound-word-worksheet9.component';

describe('Std03CompoundWordWorksheet9Component', () => {
  let component: Std03CompoundWordWorksheet9Component;
  let fixture: ComponentFixture<Std03CompoundWordWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CompoundWordWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CompoundWordWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
