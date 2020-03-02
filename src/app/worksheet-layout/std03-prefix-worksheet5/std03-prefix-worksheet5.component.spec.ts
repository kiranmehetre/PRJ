import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrefixWorksheet5Component } from './std03-prefix-worksheet5.component';

describe('Std03PrefixWorksheet5Component', () => {
  let component: Std03PrefixWorksheet5Component;
  let fixture: ComponentFixture<Std03PrefixWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrefixWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrefixWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
