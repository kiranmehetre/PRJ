import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CommonNounWorksheet2Component } from './std01-common-noun-worksheet2.component';

describe('Std01CommonNounWorksheet2Component', () => {
  let component: Std01CommonNounWorksheet2Component;
  let fixture: ComponentFixture<Std01CommonNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CommonNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CommonNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
