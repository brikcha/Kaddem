import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantErrorComponent } from './etudiant-error.component';

describe('EtudiantErrorComponent', () => {
  let component: EtudiantErrorComponent;
  let fixture: ComponentFixture<EtudiantErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
