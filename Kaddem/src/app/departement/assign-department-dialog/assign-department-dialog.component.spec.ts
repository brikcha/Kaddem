import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDepartmentDialogComponent } from './assign-department-dialog.component';

describe('AssignDepartmentDialogComponent', () => {
  let component: AssignDepartmentDialogComponent;
  let fixture: ComponentFixture<AssignDepartmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignDepartmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDepartmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
