import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CommonNounWorksheet4Component } from './std02-common-noun-worksheet4.component';

describe('Std02CommonNounWorksheet4Component', () => {
  let component: Std02CommonNounWorksheet4Component;
  let fixture: ComponentFixture<Std02CommonNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CommonNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CommonNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
