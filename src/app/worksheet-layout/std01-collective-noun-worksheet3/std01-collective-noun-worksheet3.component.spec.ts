import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CollectiveNounWorksheet3Component } from './std01-collective-noun-worksheet3.component';

describe('Std01CollectiveNounWorksheet3Component', () => {
  let component: Std01CollectiveNounWorksheet3Component;
  let fixture: ComponentFixture<Std01CollectiveNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CollectiveNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CollectiveNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
