import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ProperNounWorksheet3Component } from './std03-proper-noun-worksheet3.component';

describe('Std03ProperNounWorksheet3Component', () => {
  let component: Std03ProperNounWorksheet3Component;
  let fixture: ComponentFixture<Std03ProperNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ProperNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ProperNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
