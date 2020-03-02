import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ArticlesWorksheet5Component } from './std01-articles-worksheet5.component';

describe('Std01ArticlesWorksheet5Component', () => {
  let component: Std01ArticlesWorksheet5Component;
  let fixture: ComponentFixture<Std01ArticlesWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ArticlesWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ArticlesWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
