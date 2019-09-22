import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details4Page } from './details4.page';

describe('Details4Page', () => {
  let component: Details4Page;
  let fixture: ComponentFixture<Details4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
