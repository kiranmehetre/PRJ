import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CollectiveNounWorksheet10Component } from './std02-collective-noun-worksheet10.component';

describe('Std02CollectiveNounWorksheet10Component', () => {
  let component: Std02CollectiveNounWorksheet10Component;
  let fixture: ComponentFixture<Std02CollectiveNounWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CollectiveNounWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CollectiveNounWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
