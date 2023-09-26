import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contract } from 'app/model/Contact';
import { ContratService } from '../services/contrat.service';

@Component({
  selector: 'app-edit-contract-dialog',
  templateUrl: './edit-contract-dialog.component.html',
  styleUrls: ['./edit-contract-dialog.component.css']
})
export class EditContractDialogComponent implements OnInit {

  contractToEdit = new Contract();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private contractService: ContratService, public dialogRef: MatDialogRef<EditContractDialogComponent>) { 
    this.contractToEdit = data;
  }

  ngOnInit(): void {
    
  }

  editContract() {
    this.contractService.editContact(this.contractToEdit).subscribe(data => {
      this.dialogRef.close();
    });
  }

}
