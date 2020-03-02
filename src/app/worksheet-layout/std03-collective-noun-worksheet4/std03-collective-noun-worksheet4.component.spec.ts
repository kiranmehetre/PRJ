import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03CollectiveNounWorksheet4Component } from './std03-collective-noun-worksheet4.component';

describe('Std03CollectiveNounWorksheet4Component', () => {
  let component: Std03CollectiveNounWorksheet4Component;
  let fixture: ComponentFixture<Std03CollectiveNounWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03CollectiveNounWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03CollectiveNounWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
