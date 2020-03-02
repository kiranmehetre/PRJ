import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CommonNounWorksheet5Component } from './std03-common-noun-worksheet5.component';

describe('Std03CommonNounWorksheet5Component', () => {
  let component: Std03CommonNounWorksheet5Component;
  let fixture: ComponentFixture<Std03CommonNounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CommonNounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CommonNounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
