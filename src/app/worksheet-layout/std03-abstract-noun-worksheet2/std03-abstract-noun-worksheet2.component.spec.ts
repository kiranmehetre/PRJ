import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AbstractNounWorksheet2Component } from './std03-abstract-noun-worksheet2.component';

describe('Std03AbstractNounWorksheet2Component', () => {
  let component: Std03AbstractNounWorksheet2Component;
  let fixture: ComponentFixture<Std03AbstractNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AbstractNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AbstractNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
