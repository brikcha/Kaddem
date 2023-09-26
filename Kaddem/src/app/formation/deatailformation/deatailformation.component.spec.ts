import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailformationComponent } from './deatailformation.component';

describe('DeatailformationComponent', () => {
  let component: DeatailformationComponent;
  let fixture: ComponentFixture<DeatailformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatailformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
