import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ArticlesWorksheet2Component } from './std01-articles-worksheet2.component';

describe('Std01ArticlesWorksheet2Component', () => {
  let component: Std01ArticlesWorksheet2Component;
  let fixture: ComponentFixture<Std01ArticlesWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ArticlesWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ArticlesWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
