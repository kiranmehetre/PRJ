import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CommonNounWorksheet3Component } from './std01-common-noun-worksheet3.component';

describe('Std01CommonNounWorksheet3Component', () => {
  let component: Std01CommonNounWorksheet3Component;
  let fixture: ComponentFixture<Std01CommonNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CommonNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CommonNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
