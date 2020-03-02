import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CommonNounWorksheet5Component } from './std01-common-noun-worksheet5.component';

describe('Std01CommonNounWorksheet5Component', () => {
  let component: Std01CommonNounWorksheet5Component;
  let fixture: ComponentFixture<Std01CommonNounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CommonNounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CommonNounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
