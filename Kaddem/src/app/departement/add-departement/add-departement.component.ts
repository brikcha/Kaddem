import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartementService } from '../Service/departement.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  Formdep: FormGroup;

  constructor(private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddDepartementComponent>,
    private departementService: DepartementService) {
    this.Formdep=this.fb.group({
      nomDepart:[''],
      description:[''],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.Formdep.get('nomDepart').setValue(this.data.nomDepart);
      this.Formdep.get('description').setValue(this.data.description);
    }
  }

  addDepartement (){
    const depToAdd = {
      nomDepart: this.Formdep.get('nomDepart').value,
      description: this.Formdep.get('description').value
    }
    if(this.data){
      depToAdd['idDepart'] = this.data.idDepart;
      this.departementService.editDepartement(depToAdd).subscribe(() => {
        this.dialogRef.close();
      });
    }else {
      this.departementService.AddDepartement(depToAdd).subscribe(() => {
        this.dialogRef.close();
      });
    }
    
  }

}
