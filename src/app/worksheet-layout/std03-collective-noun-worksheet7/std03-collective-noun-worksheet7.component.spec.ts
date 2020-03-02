import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CollectiveNounWorksheet7Component } from './std03-collective-noun-worksheet7.component';

describe('Std03CollectiveNounWorksheet7Component', () => {
  let component: Std03CollectiveNounWorksheet7Component;
  let fixture: ComponentFixture<Std03CollectiveNounWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CollectiveNounWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CollectiveNounWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
