import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CollectiveNounWorksheet1Component } from './std03-collective-noun-worksheet1.component';

describe('Std03CollectiveNounWorksheet1Component', () => {
  let component: Std03CollectiveNounWorksheet1Component;
  let fixture: ComponentFixture<Std03CollectiveNounWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CollectiveNounWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CollectiveNounWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
