import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AbstractNounWorksheet3Component } from './std03-abstract-noun-worksheet3.component';

describe('Std03AbstractNounWorksheet3Component', () => {
  let component: Std03AbstractNounWorksheet3Component;
  let fixture: ComponentFixture<Std03AbstractNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AbstractNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AbstractNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
