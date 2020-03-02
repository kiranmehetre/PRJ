import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ArticlesWorksheet4Component } from './std02-articles-worksheet4.component';

describe('Std02ArticlesWorksheet4Component', () => {
  let component: Std02ArticlesWorksheet4Component;
  let fixture: ComponentFixture<Std02ArticlesWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ArticlesWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ArticlesWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
