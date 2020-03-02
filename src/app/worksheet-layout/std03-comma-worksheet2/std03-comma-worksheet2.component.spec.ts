import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CommaWorksheet2Component } from './std03-comma-worksheet2.component';

describe('Std03CommaWorksheet2Component', () => {
  let component: Std03CommaWorksheet2Component;
  let fixture: ComponentFixture<Std03CommaWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CommaWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CommaWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
