import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01DemostrativePronounWorksheet4Component } from './std01-demostrative-pronoun-worksheet4.component';

describe('Std01DemostrativePronounWorksheet4Component', () => {
  let component: Std01DemostrativePronounWorksheet4Component;
  let fixture: ComponentFixture<Std01DemostrativePronounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01DemostrativePronounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01DemostrativePronounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
