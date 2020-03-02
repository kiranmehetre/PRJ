import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ProperNounWorksheet4Component } from './std03-proper-noun-worksheet4.component';

describe('Std03ProperNounWorksheet4Component', () => {
  let component: Std03ProperNounWorksheet4Component;
  let fixture: ComponentFixture<Std03ProperNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ProperNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ProperNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
