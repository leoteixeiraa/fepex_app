import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosAnterioresPage } from './trabalhos-anteriores.page';

describe('TrabalhosAnterioresPage', () => {
  let component: TrabalhosAnterioresPage;
  let fixture: ComponentFixture<TrabalhosAnterioresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosAnterioresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosAnterioresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
