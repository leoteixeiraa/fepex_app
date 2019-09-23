import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details9Page } from './details9.page';

describe('Details9Page', () => {
  let component: Details9Page;
  let fixture: ComponentFixture<Details9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
