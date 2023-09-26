import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChefDepartementService } from '../Service/chef-departement.service';

@Component({
  selector: 'app-add-chef-departement',
  templateUrl: './add-chef-departement.component.html',
  styleUrls: ['./add-chef-departement.component.css']
})
export class AddChefDepartementComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddChefDepartementComponent>,
    private chefDepartementService: ChefDepartementService) {
    this.reactiveForm = this.fb.group({
      nom: ['', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.reactiveForm.get("nom").setValue(this.data.nomchefDepart);
      this.reactiveForm.get("prenom").setValue(this.data.prenomchefdepart);
    }
  }

  get etatinput() {

    return this.reactiveForm.controls
  }

  submit() {
    const chefDep = {
      nomchefDepart: this.reactiveForm.get('nom').value,
      prenomchefdepart: this.reactiveForm.get('prenom').value
    }
    if (this.data) {
      chefDep['idchefDepart'] = this.data.idchefDepart;
      this.chefDepartementService.editChefDepartement(chefDep).subscribe(data => {
        this.dialogRef.close();
      });
    } else {
      this.chefDepartementService.AddChefDepartement(chefDep).subscribe(data => {
        this.dialogRef.close();
      });
    }
  }

}
