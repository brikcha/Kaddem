import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipesComponent } from './list-equipes.component';

describe('ListEquipesComponent', () => {
  let component: ListEquipesComponent;
  let fixture: ComponentFixture<ListEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEquipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
