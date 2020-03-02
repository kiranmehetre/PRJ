import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CollectiveNounWorksheet3Component } from './std02-collective-noun-worksheet3.component';

describe('Std02CollectiveNounWorksheet3Component', () => {
  let component: Std02CollectiveNounWorksheet3Component;
  let fixture: ComponentFixture<Std02CollectiveNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CollectiveNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CollectiveNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
