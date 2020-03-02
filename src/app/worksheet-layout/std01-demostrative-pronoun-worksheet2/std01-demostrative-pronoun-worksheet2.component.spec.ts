import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01DemostrativePronounWorksheet2Component } from './std01-demostrative-pronoun-worksheet2.component';

describe('Std01DemostrativePronounWorksheet2Component', () => {
  let component: Std01DemostrativePronounWorksheet2Component;
  let fixture: ComponentFixture<Std01DemostrativePronounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01DemostrativePronounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01DemostrativePronounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
