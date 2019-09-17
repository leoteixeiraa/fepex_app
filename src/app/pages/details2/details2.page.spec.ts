import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details2Page } from './details2.page';

describe('Details2Page', () => {
  let component: Details2Page;
  let fixture: ComponentFixture<Details2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
