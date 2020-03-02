import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ArticlesWorksheet3Component } from './std02-articles-worksheet3.component';

describe('Std02ArticlesWorksheet3Component', () => {
  let component: Std02ArticlesWorksheet3Component;
  let fixture: ComponentFixture<Std02ArticlesWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ArticlesWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ArticlesWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
