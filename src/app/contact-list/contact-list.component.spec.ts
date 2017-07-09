import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookComponent } from './adress-book.component';

describe('AdressBookComponent', () => {
  let component: AdressBookComponent;
  let fixture: ComponentFixture<AdressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
