import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrefixWorksheet3Component } from './std03-prefix-worksheet3.component';

describe('Std03PrefixWorksheet3Component', () => {
  let component: Std03PrefixWorksheet3Component;
  let fixture: ComponentFixture<Std03PrefixWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrefixWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrefixWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
