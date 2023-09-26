import { Component, OnInit } from '@angular/core';
import { DepartementService } from './../Service/departement.service';
import { Departement } from './../../model/Departement';
import { FormBuilder, Validators } from '@angular/forms';
import { ChefDepartementService } from 'app/chef-departement/Service/chef-departement.service';
import { Chef_Departement } from 'app/model/Chef_Departement';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartementComponent } from '../add-departement/add-departement.component';
import { UniversiteService } from 'app/Service/universite.service';
import { Universite } from 'app/model/Universite';
import { AssignDepartmentDialogComponent } from '../assign-department-dialog/assign-department-dialog.component';

@Component({
  selector: 'app-listdepartement',
  templateUrl: './listdepartement.component.html',
  styleUrls: ['./listdepartement.component.css']
})
export class ListdepartementComponent implements OnInit {

  Formdep: any;

  listdepartement: Departement[];
  form: boolean = false;
  departementmodif: Departement;
  openform: boolean = false;
  //usertype="ETUDIANT";
  usertype = "ADMIN";

  listchefdepartement: Chef_Departement[];
  chefdep: any = null;
  actiontypeonform = "add";

  constructor(private departementService: DepartementService, private fb: FormBuilder, private chefDepartementService: ChefDepartementService,
    private dialog: MatDialog,private universiteservice:UniversiteService) {

    this.Formdep = this.fb.group({
      nomDepart: [''],
      description: [''],
    });
  }


  openDialog(depart) {
    const dialogRef = this.dialog.open(AddDepartementComponent, {
      width: '600px',
      data: depart
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllDepart();
    });
  }

  affectationDialog() {
    const dialogRef = this.dialog.open(AssignDepartmentDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllDepart();
    });
  }



  ngOnInit(): void {
    this.GetAllDepart();
    this.chefDepartementService.GetAllChefDepartement().subscribe(res => {
      this.listchefdepartement = res;
    });
  }

  GetAllDepart() {
    this.departementService.GetAllDepartement().subscribe(res => this.listdepartement = res)

  }


  addDepartement() {
    if (this.actiontypeonform == "add") {
      const depToAdd = {
        nomDepart: this.Formdep.get('nomDepart').value,
        description: this.Formdep.get('description').value
      }
      this.departementService.AddDepartement(depToAdd).subscribe(() => {
        this.GetAllDepart();
        this.form = false;
      });
    } else {
      this.departementmodif.nomDepart = this.Formdep.controls['nomDepart'].value
      this.departementmodif.description = this.Formdep.controls['description'].value
      this.departementService.editDepartement(this.departementmodif).subscribe(() => {
        this.GetAllDepart();
        this.openform = false;
        this.actiontypeonform = "add";
        this.Formdep.controls['nomDepart'].value = "";
        this.Formdep.controls['description'].value = "";
      });

    }

  }



  editdepartement(dp: Departement) {
    this.departementService.editDepartement(dp).subscribe();
  }
  deletedepartement(p: any) {

    this.departementService.deleteDepartement(p.idDepart).subscribe(() => this.GetAllDepart())

  }

  get etatinput() {

    return this.Formdep.controls
  }

  openFormfn() {
    this.openform = true;

  }
  closeFormfn() {
    this.openform = false;

  }
  selectdeparttomodify(dep: any) {
    this.departementmodif = dep;

    this.Formdep.controls['nomDepart'].value = dep.nomDepart;
    this.Formdep.controls['description'].value = dep.description;
    this.openform = true;
    this.actiontypeonform = "edit";
  }
  infodep(p: any) {
    this.chefdep = this.listchefdepartement.filter(e => e.dep != null).find(e => e.dep.idDepart == p.idDepart);
  }
  
  chercher(event: any) {
    if (event.target.value == "") {
      this.GetAllDepart();
    } else {
      this.listdepartement = this.listdepartement.filter(e => e.nomDepart.toUpperCase().includes(event.target.value.toUpperCase()))
    }
  }

  affecter()
  {
    this.departementService.affecter(this.Formdep.get('idUniversite').value,this.Formdep.get('idDepartement').value).subscribe(); 
}
}
