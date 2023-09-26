import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Departement } from 'app/model/Departement';
import { Universite } from 'app/model/Universite';
import { UniversiteService } from 'app/Service/universite.service';
import { DepartementService } from '../Service/departement.service';

@Component({
  selector: 'app-assign-department-dialog',
  templateUrl: './assign-department-dialog.component.html',
  styleUrls: ['./assign-department-dialog.component.css']
})
export class AssignDepartmentDialogComponent implements OnInit {

  ListeUniversites: Universite[];
  listdepartement: Departement[];
  Formdep: FormGroup;

  constructor(private universiteservice: UniversiteService, private departementService: DepartementService, private fb: FormBuilder,
    public dialogRef: MatDialogRef<AssignDepartmentDialogComponent>) {
    this.Formdep = this.fb.group({
      departement: [''],
      universite: ['']
    });
  }

  ngOnInit(): void {
    this.universiteservice.GetAllUniversite().subscribe(res => {
      this.ListeUniversites = res;
    });
    this.GetAllDepart();
  }

  GetAllDepart() {
    this.departementService.GetAllDepartement().subscribe(res => this.listdepartement = res)

  }

  affecter() {
    this.departementService.affecter(this.Formdep.get('universite').value, this.Formdep.get('departement').value).subscribe(data => {
      this.dialogRef.close();
    });
  }

}
