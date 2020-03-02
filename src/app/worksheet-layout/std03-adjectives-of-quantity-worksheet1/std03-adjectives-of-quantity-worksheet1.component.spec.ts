import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdjectivesOfQuantityWorksheet1Component } from './std03-adjectives-of-quantity-worksheet1.component';

describe('Std03AdjectivesOfQuantityWorksheet1Component', () => {
  let component: Std03AdjectivesOfQuantityWorksheet1Component;
  let fixture: ComponentFixture<Std03AdjectivesOfQuantityWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdjectivesOfQuantityWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdjectivesOfQuantityWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
