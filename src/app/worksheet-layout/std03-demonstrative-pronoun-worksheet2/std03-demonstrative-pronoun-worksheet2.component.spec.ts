import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03DemonstrativePronounWorksheet2Component } from './std03-demonstrative-pronoun-worksheet2.component';

describe('Std03DemonstrativePronounWorksheet2Component', () => {
  let component: Std03DemonstrativePronounWorksheet2Component;
  let fixture: ComponentFixture<Std03DemonstrativePronounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03DemonstrativePronounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03DemonstrativePronounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
