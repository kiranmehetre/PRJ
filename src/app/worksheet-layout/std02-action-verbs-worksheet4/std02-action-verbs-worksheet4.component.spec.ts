import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ActionVerbsWorksheet4Component } from './std02-action-verbs-worksheet4.component';

describe('Std02ActionVerbsWorksheet4Component', () => {
  let component: Std02ActionVerbsWorksheet4Component;
  let fixture: ComponentFixture<Std02ActionVerbsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ActionVerbsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ActionVerbsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
