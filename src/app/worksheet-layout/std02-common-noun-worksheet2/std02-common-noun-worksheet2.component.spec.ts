import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CommonNounWorksheet2Component } from './std02-common-noun-worksheet2.component';

describe('Std02CommonNounWorksheet2Component', () => {
  let component: Std02CommonNounWorksheet2Component;
  let fixture: ComponentFixture<Std02CommonNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CommonNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CommonNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
