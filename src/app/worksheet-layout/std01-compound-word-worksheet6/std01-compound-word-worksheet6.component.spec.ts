import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CompoundWordWorksheet6Component } from './std01-compound-word-worksheet6.component';

describe('Std01CompoundWordWorksheet6Component', () => {
  let component: Std01CompoundWordWorksheet6Component;
  let fixture: ComponentFixture<Std01CompoundWordWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CompoundWordWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CompoundWordWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
