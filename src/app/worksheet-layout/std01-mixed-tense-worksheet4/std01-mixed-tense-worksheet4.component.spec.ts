import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedTenseWorksheet4Component } from './std01-mixed-tense-worksheet4.component';

describe('Std01MixedTenseWorksheet4Component', () => {
  let component: Std01MixedTenseWorksheet4Component;
  let fixture: ComponentFixture<Std01MixedTenseWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedTenseWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedTenseWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
