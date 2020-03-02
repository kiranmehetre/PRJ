import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ProperNounWorksheet2Component } from './std01-proper-noun-worksheet2.component';

describe('Std01ProperNounWorksheet2Component', () => {
  let component: Std01ProperNounWorksheet2Component;
  let fixture: ComponentFixture<Std01ProperNounWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ProperNounWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ProperNounWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
