import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03AbstractNounWorksheet4Component } from './std03-abstract-noun-worksheet4.component';

describe('Std03AbstractNounWorksheet4Component', () => {
  let component: Std03AbstractNounWorksheet4Component;
  let fixture: ComponentFixture<Std03AbstractNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03AbstractNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03AbstractNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
