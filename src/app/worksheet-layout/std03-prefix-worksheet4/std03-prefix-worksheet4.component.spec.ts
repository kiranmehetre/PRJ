import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrefixWorksheet4Component } from './std03-prefix-worksheet4.component';

describe('Std03PrefixWorksheet4Component', () => {
  let component: Std03PrefixWorksheet4Component;
  let fixture: ComponentFixture<Std03PrefixWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrefixWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrefixWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
