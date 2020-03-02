import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ArticlesWorksheet3Component } from './std01-articles-worksheet3.component';

describe('Std01ArticlesWorksheet3Component', () => {
  let component: Std01ArticlesWorksheet3Component;
  let fixture: ComponentFixture<Std01ArticlesWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ArticlesWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ArticlesWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
