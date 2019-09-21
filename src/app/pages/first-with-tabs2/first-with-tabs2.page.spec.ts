import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWithTabs2Page } from './first-with-tabs2.page';

describe('FirstWithTabs2Page', () => {
  let component: FirstWithTabs2Page;
  let fixture: ComponentFixture<FirstWithTabs2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstWithTabs2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstWithTabs2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
