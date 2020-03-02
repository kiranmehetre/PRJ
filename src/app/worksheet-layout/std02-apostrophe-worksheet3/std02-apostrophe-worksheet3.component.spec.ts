import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ApostropheWorksheet3Component } from './std02-apostrophe-worksheet3.component';

describe('Std02ApostropheWorksheet3Component', () => {
  let component: Std02ApostropheWorksheet3Component;
  let fixture: ComponentFixture<Std02ApostropheWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ApostropheWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ApostropheWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
