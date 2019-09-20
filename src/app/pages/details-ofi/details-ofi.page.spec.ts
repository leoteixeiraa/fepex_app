import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfiPage } from './details-ofi.page';

describe('DetailsOfiPage', () => {
  let component: DetailsOfiPage;
  let fixture: ComponentFixture<DetailsOfiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOfiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
