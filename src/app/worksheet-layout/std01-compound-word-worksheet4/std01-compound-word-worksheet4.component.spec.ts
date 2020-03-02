import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CompoundWordWorksheet4Component } from './std01-compound-word-worksheet4.component';

describe('Std01CompoundWordWorksheet4Component', () => {
  let component: Std01CompoundWordWorksheet4Component;
  let fixture: ComponentFixture<Std01CompoundWordWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CompoundWordWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CompoundWordWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
