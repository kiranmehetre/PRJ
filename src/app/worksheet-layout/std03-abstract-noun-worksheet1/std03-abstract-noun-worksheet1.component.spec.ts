import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AbstractNounWorksheet1Component } from './std03-abstract-noun-worksheet1.component';

describe('Std03AbstractNounWorksheet1Component', () => {
  let component: Std03AbstractNounWorksheet1Component;
  let fixture: ComponentFixture<Std03AbstractNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AbstractNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AbstractNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
