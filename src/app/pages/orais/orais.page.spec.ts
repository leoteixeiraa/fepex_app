import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OraisPage } from './orais.page';

describe('OraisPage', () => {
  let component: OraisPage;
  let fixture: ComponentFixture<OraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OraisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
