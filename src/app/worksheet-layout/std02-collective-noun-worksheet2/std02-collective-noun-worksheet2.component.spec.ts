import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CollectiveNounWorksheet2Component } from './std02-collective-noun-worksheet2.component';

describe('Std02CollectiveNounWorksheet2Component', () => {
  let component: Std02CollectiveNounWorksheet2Component;
  let fixture: ComponentFixture<Std02CollectiveNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CollectiveNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CollectiveNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
