import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CollectiveNounWorksheet9Component } from './std01-collective-noun-worksheet9.component';

describe('Std01CollectiveNounWorksheet9Component', () => {
  let component: Std01CollectiveNounWorksheet9Component;
  let fixture: ComponentFixture<Std01CollectiveNounWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CollectiveNounWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CollectiveNounWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
