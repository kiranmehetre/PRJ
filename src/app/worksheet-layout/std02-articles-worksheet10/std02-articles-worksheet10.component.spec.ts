import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ArticlesWorksheet10Component } from './std02-articles-worksheet10.component';

describe('Std02ArticlesWorksheet10Component', () => {
  let component: Std02ArticlesWorksheet10Component;
  let fixture: ComponentFixture<Std02ArticlesWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ArticlesWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ArticlesWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
