import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CollectiveNounWorksheet7Component } from './std02-collective-noun-worksheet7.component';

describe('Std02CollectiveNounWorksheet7Component', () => {
  let component: Std02CollectiveNounWorksheet7Component;
  let fixture: ComponentFixture<Std02CollectiveNounWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CollectiveNounWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CollectiveNounWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
