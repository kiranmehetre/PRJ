import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AdjectivesOfQuantityWorksheet2Component } from './std03-adjectives-of-quantity-worksheet2.component';

describe('Std03AdjectivesOfQuantityWorksheet2Component', () => {
  let component: Std03AdjectivesOfQuantityWorksheet2Component;
  let fixture: ComponentFixture<Std03AdjectivesOfQuantityWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AdjectivesOfQuantityWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AdjectivesOfQuantityWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
