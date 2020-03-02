import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ApostropheWorksheet1Component } from './std03-apostrophe-worksheet1.component';

describe('Std03ApostropheWorksheet1Component', () => {
  let component: Std03ApostropheWorksheet1Component;
  let fixture: ComponentFixture<Std03ApostropheWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ApostropheWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ApostropheWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
