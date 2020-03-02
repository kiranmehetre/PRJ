import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdverbsWorksheet4Component } from './std02-adverbs-worksheet4.component';

describe('Std02AdverbsWorksheet4Component', () => {
  let component: Std02AdverbsWorksheet4Component;
  let fixture: ComponentFixture<Std02AdverbsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdverbsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdverbsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
