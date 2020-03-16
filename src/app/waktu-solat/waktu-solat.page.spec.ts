import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaktuSolatPage } from './waktu-solat.page';

describe('WaktuSolatPage', () => {
  let component: WaktuSolatPage;
  let fixture: ComponentFixture<WaktuSolatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaktuSolatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaktuSolatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
