import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetLayoutComponent } from './worksheet-layout.component';

describe('WorksheetLayoutComponent', () => {
  let component: WorksheetLayoutComponent;
  let fixture: ComponentFixture<WorksheetLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
