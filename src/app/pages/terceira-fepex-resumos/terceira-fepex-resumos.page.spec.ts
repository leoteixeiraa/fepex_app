import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraFepexResumosPage } from './terceira-fepex-resumos.page';

describe('TerceiraFepexResumosPage', () => {
  let component: TerceiraFepexResumosPage;
  let fixture: ComponentFixture<TerceiraFepexResumosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiraFepexResumosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiraFepexResumosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
