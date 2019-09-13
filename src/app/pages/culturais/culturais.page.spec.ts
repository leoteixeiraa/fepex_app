import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaisPage } from './culturais.page';

describe('CulturaisPage', () => {
  let component: CulturaisPage;
  let fixture: ComponentFixture<CulturaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
