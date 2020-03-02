import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CommonNounWorksheet3Component } from './std03-common-noun-worksheet3.component';

describe('Std03CommonNounWorksheet3Component', () => {
  let component: Std03CommonNounWorksheet3Component;
  let fixture: ComponentFixture<Std03CommonNounWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CommonNounWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CommonNounWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
