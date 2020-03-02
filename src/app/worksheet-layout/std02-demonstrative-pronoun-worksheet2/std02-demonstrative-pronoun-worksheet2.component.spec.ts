import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02DemonstrativePronounWorksheet2Component } from './std02-demonstrative-pronoun-worksheet2.component';

describe('Std02DemonstrativePronounWorksheet2Component', () => {
  let component: Std02DemonstrativePronounWorksheet2Component;
  let fixture: ComponentFixture<Std02DemonstrativePronounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02DemonstrativePronounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02DemonstrativePronounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
