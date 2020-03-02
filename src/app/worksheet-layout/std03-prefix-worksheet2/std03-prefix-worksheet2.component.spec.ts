import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrefixWorksheet2Component } from './std03-prefix-worksheet2.component';

describe('Std03PrefixWorksheet2Component', () => {
  let component: Std03PrefixWorksheet2Component;
  let fixture: ComponentFixture<Std03PrefixWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrefixWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrefixWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
