import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaFepexResumosPage } from './segunda-fepex-resumos.page';

describe('SegundaFepexResumosPage', () => {
  let component: SegundaFepexResumosPage;
  let fixture: ComponentFixture<SegundaFepexResumosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaFepexResumosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaFepexResumosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
