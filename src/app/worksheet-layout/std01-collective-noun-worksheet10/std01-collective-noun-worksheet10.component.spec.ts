import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CollectiveNounWorksheet10Component } from './std01-collective-noun-worksheet10.component';

describe('Std01CollectiveNounWorksheet10Component', () => {
  let component: Std01CollectiveNounWorksheet10Component;
  let fixture: ComponentFixture<Std01CollectiveNounWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CollectiveNounWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CollectiveNounWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
