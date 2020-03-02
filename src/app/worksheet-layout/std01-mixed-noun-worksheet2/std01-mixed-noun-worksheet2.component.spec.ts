import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedNounWorksheet2Component } from './std01-mixed-noun-worksheet2.component';

describe('Std01MixedNounWorksheet2Component', () => {
  let component: Std01MixedNounWorksheet2Component;
  let fixture: ComponentFixture<Std01MixedNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
