import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaFepexArtigosPage } from './segunda-fepex-artigos.page';

describe('SegundaFepexArtigosPage', () => {
  let component: SegundaFepexArtigosPage;
  let fixture: ComponentFixture<SegundaFepexArtigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaFepexArtigosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaFepexArtigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
