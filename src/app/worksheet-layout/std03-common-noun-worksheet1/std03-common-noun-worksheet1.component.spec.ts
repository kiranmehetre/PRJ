import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CommonNounWorksheet1Component } from './std03-common-noun-worksheet1.component';

describe('Std03CommonNounWorksheet1Component', () => {
  let component: Std03CommonNounWorksheet1Component;
  let fixture: ComponentFixture<Std03CommonNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CommonNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CommonNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
