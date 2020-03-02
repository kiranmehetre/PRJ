import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01CommaWorksheet2Component } from './std01-comma-worksheet2.component';

describe('Std01CommaWorksheet2Component', () => {
  let component: Std01CommaWorksheet2Component;
  let fixture: ComponentFixture<Std01CommaWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01CommaWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01CommaWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
