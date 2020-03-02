import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CommonNounWorksheet3Component } from './std02-common-noun-worksheet3.component';

describe('Std02CommonNounWorksheet3Component', () => {
  let component: Std02CommonNounWorksheet3Component;
  let fixture: ComponentFixture<Std02CommonNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CommonNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CommonNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
