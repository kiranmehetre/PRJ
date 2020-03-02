import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ApostropheWorksheet2Component } from './std02-apostrophe-worksheet2.component';

describe('Std02ApostropheWorksheet2Component', () => {
  let component: Std02ApostropheWorksheet2Component;
  let fixture: ComponentFixture<Std02ApostropheWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ApostropheWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ApostropheWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
