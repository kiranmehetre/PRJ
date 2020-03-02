import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02DemonstrativePronounWorksheet1Component } from './std02-demonstrative-pronoun-worksheet1.component';

describe('Std02DemonstrativePronounWorksheet1Component', () => {
  let component: Std02DemonstrativePronounWorksheet1Component;
  let fixture: ComponentFixture<Std02DemonstrativePronounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02DemonstrativePronounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02DemonstrativePronounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
