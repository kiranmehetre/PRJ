import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01DemostrativePronounWorksheet5Component } from './std01-demostrative-pronoun-worksheet5.component';

describe('Std01DemostrativePronounWorksheet5Component', () => {
  let component: Std01DemostrativePronounWorksheet5Component;
  let fixture: ComponentFixture<Std01DemostrativePronounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01DemostrativePronounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01DemostrativePronounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
