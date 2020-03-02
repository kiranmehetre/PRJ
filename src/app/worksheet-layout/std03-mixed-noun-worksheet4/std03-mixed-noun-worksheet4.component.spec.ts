import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedNounWorksheet4Component } from './std03-mixed-noun-worksheet4.component';

describe('Std03MixedNounWorksheet4Component', () => {
  let component: Std03MixedNounWorksheet4Component;
  let fixture: ComponentFixture<Std03MixedNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
