import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02DemonstrativePronounWorksheet5Component } from './std02-demonstrative-pronoun-worksheet5.component';

describe('Std02DemonstrativePronounWorksheet5Component', () => {
  let component: Std02DemonstrativePronounWorksheet5Component;
  let fixture: ComponentFixture<Std02DemonstrativePronounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02DemonstrativePronounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02DemonstrativePronounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
