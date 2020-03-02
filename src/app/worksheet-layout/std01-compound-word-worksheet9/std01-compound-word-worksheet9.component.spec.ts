import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CompoundWordWorksheet9Component } from './std01-compound-word-worksheet9.component';

describe('Std01CompoundWordWorksheet9Component', () => {
  let component: Std01CompoundWordWorksheet9Component;
  let fixture: ComponentFixture<Std01CompoundWordWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CompoundWordWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CompoundWordWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
