import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChefDepartementComponent } from './list-chef-departement.component';

describe('ListChefDepartementComponent', () => {
  let component: ListChefDepartementComponent;
  let fixture: ComponentFixture<ListChefDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChefDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChefDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
