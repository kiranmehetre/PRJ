import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CompoundWordWorksheet5Component } from './std01-compound-word-worksheet5.component';

describe('Std01CompoundWordWorksheet5Component', () => {
  let component: Std01CompoundWordWorksheet5Component;
  let fixture: ComponentFixture<Std01CompoundWordWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CompoundWordWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CompoundWordWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
