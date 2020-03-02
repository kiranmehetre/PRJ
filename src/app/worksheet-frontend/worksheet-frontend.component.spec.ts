import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetFrontendComponent } from './worksheet-frontend.component';

describe('WorksheetFrontendComponent', () => {
  let component: WorksheetFrontendComponent;
  let fixture: ComponentFixture<WorksheetFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
