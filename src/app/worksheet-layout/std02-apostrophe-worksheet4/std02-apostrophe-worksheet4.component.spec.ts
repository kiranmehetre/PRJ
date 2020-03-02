import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ApostropheWorksheet4Component } from './std02-apostrophe-worksheet4.component';

describe('Std02ApostropheWorksheet4Component', () => {
  let component: Std02ApostropheWorksheet4Component;
  let fixture: ComponentFixture<Std02ApostropheWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ApostropheWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ApostropheWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
