import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CollectiveNounWorksheet1Component } from './std02-collective-noun-worksheet1.component';

describe('Std02CollectiveNounWorksheet1Component', () => {
  let component: Std02CollectiveNounWorksheet1Component;
  let fixture: ComponentFixture<Std02CollectiveNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CollectiveNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CollectiveNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
