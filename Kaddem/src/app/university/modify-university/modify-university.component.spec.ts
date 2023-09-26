import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUniversityComponent } from './modify-university.component';

describe('ModifyUniversityComponent', () => {
  let component: ModifyUniversityComponent;
  let fixture: ComponentFixture<ModifyUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
