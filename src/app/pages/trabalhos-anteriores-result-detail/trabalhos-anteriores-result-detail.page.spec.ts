import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosAnterioresResultDetailPage } from './trabalhos-anteriores-result-detail.page';

describe('TrabalhosAnterioresResultDetailPage', () => {
  let component: TrabalhosAnterioresResultDetailPage;
  let fixture: ComponentFixture<TrabalhosAnterioresResultDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosAnterioresResultDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosAnterioresResultDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
