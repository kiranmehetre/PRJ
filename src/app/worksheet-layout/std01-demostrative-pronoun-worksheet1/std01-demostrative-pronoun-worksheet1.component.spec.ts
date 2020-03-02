import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01DemostrativePronounWorksheet1Component } from './std01-demostrative-pronoun-worksheet1.component';

describe('Std01DemostrativePronounWorksheet1Component', () => {
  let component: Std01DemostrativePronounWorksheet1Component;
  let fixture: ComponentFixture<Std01DemostrativePronounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01DemostrativePronounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01DemostrativePronounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
