import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details6Page } from './details6.page';

describe('Details6Page', () => {
  let component: Details6Page;
  let fixture: ComponentFixture<Details6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
