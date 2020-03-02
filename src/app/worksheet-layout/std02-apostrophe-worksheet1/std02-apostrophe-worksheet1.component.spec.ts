import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ApostropheWorksheet1Component } from './std02-apostrophe-worksheet1.component';

describe('Std02ApostropheWorksheet1Component', () => {
  let component: Std02ApostropheWorksheet1Component;
  let fixture: ComponentFixture<Std02ApostropheWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ApostropheWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ApostropheWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
