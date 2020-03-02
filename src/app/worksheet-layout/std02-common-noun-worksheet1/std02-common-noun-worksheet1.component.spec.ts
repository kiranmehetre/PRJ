import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CommonNounWorksheet1Component } from './std02-common-noun-worksheet1.component';

describe('Std02CommonNounWorksheet1Component', () => {
  let component: Std02CommonNounWorksheet1Component;
  let fixture: ComponentFixture<Std02CommonNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CommonNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CommonNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
