import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ArticlesWorksheet7Component } from './std02-articles-worksheet7.component';

describe('Std02ArticlesWorksheet7Component', () => {
  let component: Std02ArticlesWorksheet7Component;
  let fixture: ComponentFixture<Std02ArticlesWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ArticlesWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ArticlesWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
