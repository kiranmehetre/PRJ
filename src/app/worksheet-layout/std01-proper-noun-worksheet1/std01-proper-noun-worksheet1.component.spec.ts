import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ProperNounWorksheet1Component } from './std01-proper-noun-worksheet1.component';

describe('Std01ProperNounWorksheet1Component', () => {
  let component: Std01ProperNounWorksheet1Component;
  let fixture: ComponentFixture<Std01ProperNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ProperNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ProperNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
