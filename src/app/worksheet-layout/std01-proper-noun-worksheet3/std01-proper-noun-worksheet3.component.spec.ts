import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ProperNounWorksheet3Component } from './std01-proper-noun-worksheet3.component';

describe('Std01ProperNounWorksheet3Component', () => {
  let component: Std01ProperNounWorksheet3Component;
  let fixture: ComponentFixture<Std01ProperNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ProperNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ProperNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
