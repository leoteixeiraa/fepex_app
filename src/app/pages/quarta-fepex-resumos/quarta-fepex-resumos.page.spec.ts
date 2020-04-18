import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartaFepexResumosPage } from './quarta-fepex-resumos.page';

describe('QuartaFepexResumosPage', () => {
  let component: QuartaFepexResumosPage;
  let fixture: ComponentFixture<QuartaFepexResumosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartaFepexResumosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartaFepexResumosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
