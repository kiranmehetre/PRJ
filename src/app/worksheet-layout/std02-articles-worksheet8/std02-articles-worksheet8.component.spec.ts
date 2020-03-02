import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ArticlesWorksheet8Component } from './std02-articles-worksheet8.component';

describe('Std02ArticlesWorksheet8Component', () => {
  let component: Std02ArticlesWorksheet8Component;
  let fixture: ComponentFixture<Std02ArticlesWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ArticlesWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ArticlesWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
