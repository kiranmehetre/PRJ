import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundWordsComponent } from './compound-words.component';

describe('CompoundWordsComponent', () => {
  let component: CompoundWordsComponent;
  let fixture: ComponentFixture<CompoundWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
