import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details5Page } from './details5.page';

describe('Details5Page', () => {
  let component: Details5Page;
  let fixture: ComponentFixture<Details5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
