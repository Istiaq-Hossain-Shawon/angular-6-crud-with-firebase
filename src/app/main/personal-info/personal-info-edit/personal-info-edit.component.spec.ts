import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoEditComponent } from './personal-info-edit.component';

describe('PersonalInfoeditComponent', () => {
  let component: PersonalInfoEditComponent;
  let fixture: ComponentFixture<PersonalInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
