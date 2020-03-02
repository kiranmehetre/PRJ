import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ProperNounWorksheet2Component } from './std03-proper-noun-worksheet2.component';

describe('Std03ProperNounWorksheet2Component', () => {
  let component: Std03ProperNounWorksheet2Component;
  let fixture: ComponentFixture<Std03ProperNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ProperNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ProperNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
