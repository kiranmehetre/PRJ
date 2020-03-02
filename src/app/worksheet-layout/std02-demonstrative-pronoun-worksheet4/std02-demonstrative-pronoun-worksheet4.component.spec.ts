import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02DemonstrativePronounWorksheet4Component } from './std02-demonstrative-pronoun-worksheet4.component';

describe('Std02DemonstrativePronounWorksheet4Component', () => {
  let component: Std02DemonstrativePronounWorksheet4Component;
  let fixture: ComponentFixture<Std02DemonstrativePronounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02DemonstrativePronounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02DemonstrativePronounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
