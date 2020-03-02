import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounComponent } from './pronoun.component';

describe('PronounComponent', () => {
  let component: PronounComponent;
  let fixture: ComponentFixture<PronounComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronounComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
