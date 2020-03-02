import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AbstractNounWorksheet5Component } from './std03-abstract-noun-worksheet5.component';

describe('Std03AbstractNounWorksheet5Component', () => {
  let component: Std03AbstractNounWorksheet5Component;
  let fixture: ComponentFixture<Std03AbstractNounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AbstractNounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AbstractNounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
