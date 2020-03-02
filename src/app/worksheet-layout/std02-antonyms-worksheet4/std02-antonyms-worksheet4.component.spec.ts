import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AntonymsWorksheet4Component } from './std02-antonyms-worksheet4.component';

describe('Std02AntonymsWorksheet4Component', () => {
  let component: Std02AntonymsWorksheet4Component;
  let fixture: ComponentFixture<Std02AntonymsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AntonymsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AntonymsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
