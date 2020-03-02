import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02DemonstrativePronounWorksheet3Component } from './std02-demonstrative-pronoun-worksheet3.component';

describe('Std02DemonstrativePronounWorksheet3Component', () => {
  let component: Std02DemonstrativePronounWorksheet3Component;
  let fixture: ComponentFixture<Std02DemonstrativePronounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02DemonstrativePronounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02DemonstrativePronounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
