import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ArticlesWorksheet10Component } from './std01-articles-worksheet10.component';

describe('Std01ArticlesWorksheet10Component', () => {
  let component: Std01ArticlesWorksheet10Component;
  let fixture: ComponentFixture<Std01ArticlesWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ArticlesWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ArticlesWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
