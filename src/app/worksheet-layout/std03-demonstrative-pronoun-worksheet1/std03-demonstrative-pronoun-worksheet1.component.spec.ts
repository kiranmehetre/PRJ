import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03DemonstrativePronounWorksheet1Component } from './std03-demonstrative-pronoun-worksheet1.component';

describe('Std03DemonstrativePronounWorksheet1Component', () => {
  let component: Std03DemonstrativePronounWorksheet1Component;
  let fixture: ComponentFixture<Std03DemonstrativePronounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03DemonstrativePronounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03DemonstrativePronounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
