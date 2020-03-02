import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdjectivesWorksheet4Component } from './std02-adjectives-worksheet4.component';

describe('Std02AdjectivesWorksheet4Component', () => {
  let component: Std02AdjectivesWorksheet4Component;
  let fixture: ComponentFixture<Std02AdjectivesWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdjectivesWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdjectivesWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
