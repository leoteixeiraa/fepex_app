import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FepexAnterioresPage } from './fepex-anteriores.page';

describe('FepexAnterioresPage', () => {
  let component: FepexAnterioresPage;
  let fixture: ComponentFixture<FepexAnterioresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FepexAnterioresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FepexAnterioresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
