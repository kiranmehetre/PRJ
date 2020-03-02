import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ProperNounWorksheet1Component } from './std03-proper-noun-worksheet1.component';

describe('Std03ProperNounWorksheet1Component', () => {
  let component: Std03ProperNounWorksheet1Component;
  let fixture: ComponentFixture<Std03ProperNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ProperNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ProperNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
