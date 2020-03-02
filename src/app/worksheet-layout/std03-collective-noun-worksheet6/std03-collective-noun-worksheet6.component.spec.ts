import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CollectiveNounWorksheet6Component } from './std03-collective-noun-worksheet6.component';

describe('Std03CollectiveNounWorksheet6Component', () => {
  let component: Std03CollectiveNounWorksheet6Component;
  let fixture: ComponentFixture<Std03CollectiveNounWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CollectiveNounWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CollectiveNounWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
