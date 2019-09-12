import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosPage } from './trabalhos.page';

describe('TrabalhosPage', () => {
  let component: TrabalhosPage;
  let fixture: ComponentFixture<TrabalhosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
