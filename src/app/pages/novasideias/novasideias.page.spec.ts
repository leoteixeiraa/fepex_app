import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasideiasPage } from './novasideias.page';

describe('NovasideiasPage', () => {
  let component: NovasideiasPage;
  let fixture: ComponentFixture<NovasideiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovasideiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovasideiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
