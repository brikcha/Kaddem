import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditContractDialogComponent } from './edit-contract-dialog/edit-contract-dialog.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contract } from 'app/model/Contact';
import { ContratService } from './services/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {


   listcontacts : any; 
   form : boolean = false;
   con!: Contract;

   searchvalue:any;
   
   reactiveForm:FormGroup ;
  constructor(private ContratService: ContratService, public dialog: MatDialog,private fb:FormBuilder) {
    this.reactiveForm=this.fb.group({
      dateDebutContrat:['',[Validators.required]],
      dateFinContrat:['',[Validators.required]],
      montantContrat:['',[Validators.required]],
      archive:[]
  }); }

  ngOnInit(): void {  
    this.getAllcon();
  }

  

  getAllcon(){
    this.ContratService.GetAllContact().subscribe(res => this.listcontacts = res)

  }
  
  addCont(){
    const p = {
      datedeb:this.reactiveForm.get('dateDebutContrat').value,
      datefin:this.reactiveForm.get('dateFinContrat').value,
      montantContrat:this.reactiveForm.get('montantContrat').value,
      archive: this.reactiveForm.get('archive').value
    }
    this.ContratService.AddContact(p).subscribe(() => {
      this.getAllcon();
    });
  }

  editCont(et : Contract){
    this.ContratService.editContact(et).subscribe();
  }
  deleteCont(idContrat : any){
    this.ContratService.deleteContact(idContrat).subscribe(() => this.getAllcon())
  }

  openDialog(contrat: Contract) {
    const dialogRef = this.dialog.open(EditContractDialogComponent, {
      width: '600px',
      data: contrat
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllcon();
    });
  }
  onsearch(){
      this.ContratService.searchh(this.searchvalue).subscribe(
        (data) => {
          if ( this.searchvalue != null) {
            this.listcontacts = data;
          }
          
  
        },
        () => this.getAllcon()
        
      );

}  
  get etatinput(){

    return this.reactiveForm.controls
    }
}