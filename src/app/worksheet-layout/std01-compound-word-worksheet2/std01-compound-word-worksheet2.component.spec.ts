import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CompoundWordWorksheet2Component } from './std01-compound-word-worksheet2.component';

describe('Std01CompoundWordWorksheet2Component', () => {
  let component: Std01CompoundWordWorksheet2Component;
  let fixture: ComponentFixture<Std01CompoundWordWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CompoundWordWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CompoundWordWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
