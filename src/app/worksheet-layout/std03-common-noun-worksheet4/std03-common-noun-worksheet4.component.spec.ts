import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CommonNounWorksheet4Component } from './std03-common-noun-worksheet4.component';

describe('Std03CommonNounWorksheet4Component', () => {
  let component: Std03CommonNounWorksheet4Component;
  let fixture: ComponentFixture<Std03CommonNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CommonNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CommonNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
