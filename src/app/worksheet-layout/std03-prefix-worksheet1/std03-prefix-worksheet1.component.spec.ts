import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrefixWorksheet1Component } from './std03-prefix-worksheet1.component';

describe('Std03PrefixWorksheet1Component', () => {
  let component: Std03PrefixWorksheet1Component;
  let fixture: ComponentFixture<Std03PrefixWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrefixWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrefixWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
