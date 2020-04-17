import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaFepexPage } from './segunda-fepex.page';

describe('SegundaFepexPage', () => {
  let component: SegundaFepexPage;
  let fixture: ComponentFixture<SegundaFepexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaFepexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaFepexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
