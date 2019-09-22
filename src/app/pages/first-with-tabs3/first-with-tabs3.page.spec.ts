import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWithTabs3Page } from './first-with-tabs3.page';

describe('FirstWithTabs3Page', () => {
  let component: FirstWithTabs3Page;
  let fixture: ComponentFixture<FirstWithTabs3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstWithTabs3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstWithTabs3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
