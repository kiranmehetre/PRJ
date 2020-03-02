import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CollectiveNounWorksheet5Component } from './std03-collective-noun-worksheet5.component';

describe('Std03CollectiveNounWorksheet5Component', () => {
  let component: Std03CollectiveNounWorksheet5Component;
  let fixture: ComponentFixture<Std03CollectiveNounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CollectiveNounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CollectiveNounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
