import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalresumoPage } from './modalresumo.page';

describe('ModalresumoPage', () => {
  let component: ModalresumoPage;
  let fixture: ComponentFixture<ModalresumoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalresumoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalresumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
