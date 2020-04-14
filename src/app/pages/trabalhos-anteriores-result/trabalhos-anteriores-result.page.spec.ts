import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosAnterioresResultPage } from './trabalhos-anteriores-result.page';

describe('TrabalhosAnterioresResultPage', () => {
  let component: TrabalhosAnterioresResultPage;
  let fixture: ComponentFixture<TrabalhosAnterioresResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosAnterioresResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosAnterioresResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
