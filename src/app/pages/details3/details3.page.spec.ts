import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details3Page } from './details3.page';

describe('Details3Page', () => {
  let component: Details3Page;
  let fixture: ComponentFixture<Details3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
