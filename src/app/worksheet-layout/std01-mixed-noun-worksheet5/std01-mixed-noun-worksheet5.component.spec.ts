import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedNounWorksheet5Component } from './std01-mixed-noun-worksheet5.component';

describe('Std01MixedNounWorksheet5Component', () => {
  let component: Std01MixedNounWorksheet5Component;
  let fixture: ComponentFixture<Std01MixedNounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedNounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedNounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
