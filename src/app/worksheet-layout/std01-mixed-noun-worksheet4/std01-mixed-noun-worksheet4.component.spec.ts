import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedNounWorksheet4Component } from './std01-mixed-noun-worksheet4.component';

describe('Std01MixedNounWorksheet4Component', () => {
  let component: Std01MixedNounWorksheet4Component;
  let fixture: ComponentFixture<Std01MixedNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
