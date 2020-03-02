import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ProperNounWorksheet4Component } from './std01-proper-noun-worksheet4.component';

describe('Std01ProperNounWorksheet4Component', () => {
  let component: Std01ProperNounWorksheet4Component;
  let fixture: ComponentFixture<Std01ProperNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ProperNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ProperNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
