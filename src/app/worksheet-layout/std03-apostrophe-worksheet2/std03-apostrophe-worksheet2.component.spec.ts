import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ApostropheWorksheet2Component } from './std03-apostrophe-worksheet2.component';

describe('Std03ApostropheWorksheet2Component', () => {
  let component: Std03ApostropheWorksheet2Component;
  let fixture: ComponentFixture<Std03ApostropheWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ApostropheWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ApostropheWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
