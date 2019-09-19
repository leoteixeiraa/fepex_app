import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrabPage } from './details-trab.page';

describe('DetailsTrabPage', () => {
  let component: DetailsTrabPage;
  let fixture: ComponentFixture<DetailsTrabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTrabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTrabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
