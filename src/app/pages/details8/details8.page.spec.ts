import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details8Page } from './details8.page';

describe('Details8Page', () => {
  let component: Details8Page;
  let fixture: ComponentFixture<Details8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
