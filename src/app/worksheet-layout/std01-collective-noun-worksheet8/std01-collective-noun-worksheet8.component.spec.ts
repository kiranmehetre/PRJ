import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CollectiveNounWorksheet8Component } from './std01-collective-noun-worksheet8.component';

describe('Std01CollectiveNounWorksheet8Component', () => {
  let component: Std01CollectiveNounWorksheet8Component;
  let fixture: ComponentFixture<Std01CollectiveNounWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CollectiveNounWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CollectiveNounWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
