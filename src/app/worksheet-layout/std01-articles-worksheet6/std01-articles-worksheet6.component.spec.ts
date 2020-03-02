import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ArticlesWorksheet6Component } from './std01-articles-worksheet6.component';

describe('Std01ArticlesWorksheet6Component', () => {
  let component: Std01ArticlesWorksheet6Component;
  let fixture: ComponentFixture<Std01ArticlesWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ArticlesWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ArticlesWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
