import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailPage } from './listing-detail.page';

describe('ListingDetailPage', () => {
  let component: ListingDetailPage;
  let fixture: ComponentFixture<ListingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
