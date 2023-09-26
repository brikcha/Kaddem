import { Component, OnInit } from '@angular/core';
import { ChefDepartementService } from './../Service/chef-departement.service';
import { DepartementService } from './../../departement/service/departement.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Chef_Departement } from 'app/model/Chef_Departement';
import { Departement } from 'app/model/Departement';
import { AddChefDepartementComponent } from '../add-chef-departement/add-chef-departement.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list-chef-departement',
  templateUrl: './list-chef-departement.component.html',
  styleUrls: ['./list-chef-departement.component.css']
})
export class ListChefDepartementComponent implements OnInit {
  Formchef: any;
  actiontypeonform = "add";
  listchefdepartement: Chef_Departement[];
  listechefnonAffecter: Chef_Departement[];
  openform: boolean = false;
  chefmodif: Chef_Departement;

  openaffect: boolean = false;
  listedepartnonAffecter: Departement[] = [];
  listedepart: any
  cheftoaffect: any = null;
  deptoaffect: any = null;

  constructor(private chefDepartementService: ChefDepartementService, private dialog: MatDialog, private fb: FormBuilder, private departementService: DepartementService) {

    this.Formchef = this.fb.group({

      nomchefDepart: ['', [Validators.required, Validators.pattern("[a-z A-Z]*"), Validators.minLength(3)]],
      prenomchefdepart: ['', [Validators.required, Validators.pattern("[a-z A-Z]*"), Validators.minLength(5)]],
    });


  };
  ngOnInit(): void {
    this.chefDepartementService.GetAllChefDepartement().subscribe(res => {
      this.listchefdepartement = res;
      this.listechefnonAffecter = res.filter(e => e.dep == null)
    });

    this.departementService.GetAllDepartement().subscribe(res => {
      this.listedepart = res;
      for (let i = 0; i < this.listedepart.length; i++) {
        let test = false;
        for (let j = 0; j < this.listchefdepartement.length; j++) {
          if (this.listchefdepartement[j].dep != null) {
            if (this.listedepart[i].idDepart == this.listchefdepartement[j].dep.idDepart) {
              test = true;
            }
          }

        }
        if (test == false) {
          this.listedepartnonAffecter.push(this.listedepart[i]);
        }
      }

    }
    )
  }
  GetAll() {
    this.chefDepartementService.GetAllChefDepartement().subscribe(res => {
      this.listchefdepartement = res
      this.listechefnonAffecter = res.filter(e => e.dep == null)
    })
    this.listedepartnonAffecter = [];
    this.departementService.GetAllDepartement().subscribe(res => {
      this.listedepart = res;
      for (let i = 0; i < this.listedepart.length; i++) {
        let test = false;
        for (let j = 0; j < this.listchefdepartement.length; j++) {
          if (this.listchefdepartement[j].dep != null) {
            if (this.listedepart[i].idDepart == this.listchefdepartement[j].dep.idDepart) {
              test = true;
            }
          }

        }
        if (test == false) {
          this.listedepartnonAffecter.push(this.listedepart[i]);
        }
      }
    })

  }
  openFormfn() {
    this.openform = true;

  }
  closeFormfn() {
    this.openform = false;

  }
  openaffectfn() {
    this.openaffect = true;
  }

  closeaffectfn() {
    this.openaffect = false;
  }

  openDialog(chefDep) {
    const dialogRef = this.dialog.open(AddChefDepartementComponent, {
      width: '600px',
      data: chefDep
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAll();
    });
  }

  get etatinput() {

    return this.Formchef.controls
  }

  add() {
    if (this.actiontypeonform == "add") {

      this.chefDepartementService.AddChefDepartement(this.Formchef.value).subscribe(() => {
        this.GetAll();
        this.closeFormfn();
      });

    } else {
      this.chefmodif.nomchefDepart = this.Formchef.controls['nomchefDepart'].value
      this.chefmodif.prenomchefdepart = this.Formchef.controls['prenomchefdepart'].value
      this.chefDepartementService.editChefDepartement(this.chefmodif).subscribe(() => {
        this.GetAll();
        this.openform = false;
        this.actiontypeonform = "add";
        this.Formchef.controls['nomchefDepart'].value = "";
        this.Formchef.controls['prenomchefdepart'].value = "";
      });
    };

  }

  deletechef(p: any) {

    this.chefDepartementService.deleteChefDepartement(p.idchefDepart).subscribe(() => this.GetAll())

  }

  selectcheftomodify(p: any) {
    this.chefmodif = p;

    this.Formchef.controls['nomchefDepart'].value = p.nomchefDepart;
    this.Formchef.controls['prenomchefdepart'].value = p.prenomchefdepart;
    this.openform = true;
    this.actiontypeonform = "edit";
  }

  selectcheftoaffect(chef: any) {
    this.cheftoaffect = chef;

  }

  selectdeptoaffect(dep: any) {
    this.deptoaffect = dep;
  }

  affect() {
    console.log("chef :" + this.cheftoaffect);
    console.log("dep: " + this.deptoaffect);
    this.chefDepartementService.affectcheftodepart(this.deptoaffect, this.cheftoaffect).subscribe(res => {
      this.GetAll();

    })
  }


}
