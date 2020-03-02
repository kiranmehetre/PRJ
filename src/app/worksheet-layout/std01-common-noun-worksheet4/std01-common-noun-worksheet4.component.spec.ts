import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CommonNounWorksheet4Component } from './std01-common-noun-worksheet4.component';

describe('Std01CommonNounWorksheet4Component', () => {
  let component: Std01CommonNounWorksheet4Component;
  let fixture: ComponentFixture<Std01CommonNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CommonNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CommonNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
