import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CommonNounWorksheet1Component } from './std01-common-noun-worksheet1.component';

describe('Std01CommonNounWorksheet1Component', () => {
  let component: Std01CommonNounWorksheet1Component;
  let fixture: ComponentFixture<Std01CommonNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CommonNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CommonNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
