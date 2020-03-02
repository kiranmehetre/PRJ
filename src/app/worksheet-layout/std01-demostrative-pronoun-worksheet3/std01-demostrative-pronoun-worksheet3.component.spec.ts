import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01DemostrativePronounWorksheet3Component } from './std01-demostrative-pronoun-worksheet3.component';

describe('Std01DemostrativePronounWorksheet3Component', () => {
  let component: Std01DemostrativePronounWorksheet3Component;
  let fixture: ComponentFixture<Std01DemostrativePronounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01DemostrativePronounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01DemostrativePronounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
