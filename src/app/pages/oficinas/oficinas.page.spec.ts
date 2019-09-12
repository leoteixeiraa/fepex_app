import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasPage } from './oficinas.page';

describe('OficinasPage', () => {
  let component: OficinasPage;
  let fixture: ComponentFixture<OficinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
