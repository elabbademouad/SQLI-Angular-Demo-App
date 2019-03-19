import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersfilterComponent } from './usersfilter.component';

describe('UsersfilterComponent', () => {
  let component: UsersfilterComponent;
  let fixture: ComponentFixture<UsersfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
