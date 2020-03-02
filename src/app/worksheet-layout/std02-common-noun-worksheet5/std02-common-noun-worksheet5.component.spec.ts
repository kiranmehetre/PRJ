import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CommonNounWorksheet5Component } from './std02-common-noun-worksheet5.component';

describe('Std02CommonNounWorksheet5Component', () => {
  let component: Std02CommonNounWorksheet5Component;
  let fixture: ComponentFixture<Std02CommonNounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CommonNounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CommonNounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
