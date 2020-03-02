import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CommonNounWorksheet2Component } from './std03-common-noun-worksheet2.component';

describe('Std03CommonNounWorksheet2Component', () => {
  let component: Std03CommonNounWorksheet2Component;
  let fixture: ComponentFixture<Std03CommonNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CommonNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CommonNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
