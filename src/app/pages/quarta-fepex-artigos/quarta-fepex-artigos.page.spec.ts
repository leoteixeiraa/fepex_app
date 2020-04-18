import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartaFepexArtigosPage } from './quarta-fepex-artigos.page';

describe('QuartaFepexArtigosPage', () => {
  let component: QuartaFepexArtigosPage;
  let fixture: ComponentFixture<QuartaFepexArtigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartaFepexArtigosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartaFepexArtigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
