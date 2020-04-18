import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraFepexArtigosPage } from './terceira-fepex-artigos.page';

describe('TerceiraFepexArtigosPage', () => {
  let component: TerceiraFepexArtigosPage;
  let fixture: ComponentFixture<TerceiraFepexArtigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiraFepexArtigosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiraFepexArtigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
