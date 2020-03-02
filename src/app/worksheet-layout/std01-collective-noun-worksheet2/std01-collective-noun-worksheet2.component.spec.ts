import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CollectiveNounWorksheet2Component } from './std01-collective-noun-worksheet2.component';

describe('Std01CollectiveNounWorksheet2Component', () => {
  let component: Std01CollectiveNounWorksheet2Component;
  let fixture: ComponentFixture<Std01CollectiveNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CollectiveNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CollectiveNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
