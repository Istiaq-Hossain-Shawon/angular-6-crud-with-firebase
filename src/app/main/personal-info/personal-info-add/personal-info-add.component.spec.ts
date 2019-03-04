import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoAddComponent } from './personal-info-add.component';

describe('PersonalInfoAddComponent', () => {
  let component: PersonalInfoAddComponent;
  let fixture: ComponentFixture<PersonalInfoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
