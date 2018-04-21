import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileSuccessComponent } from './edit-profile-success.component';

describe('EditProfileSuccessComponent', () => {
  let component: EditProfileSuccessComponent;
  let fixture: ComponentFixture<EditProfileSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
