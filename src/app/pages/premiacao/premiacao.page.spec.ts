import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiacaoPage } from './premiacao.page';

describe('PremiacaoPage', () => {
  let component: PremiacaoPage;
  let fixture: ComponentFixture<PremiacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
