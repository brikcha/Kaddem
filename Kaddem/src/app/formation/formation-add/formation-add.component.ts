import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Formation } from './../../model/Formation';
import { FormationService } from './../Service/formation.service';

@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.css']
})
export class FormationAddComponent implements OnInit {

Forma = new Formation();
@Output() GreenEvent = new EventEmitter<string>();

  constructor(private foramtionservice:FormationService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FormationAddComponent>) { }


  ngOnInit(): void {
    if (this.data) {
      this.Forma = this.data;
    }
        
  }



  submit (){
    // console.log(f)

    if(this.data) {
      this.foramtionservice.editFormation(this.Forma).subscribe(() => {
       this.dialogRef.close();
      
      }); 
    } else {
      this.foramtionservice.AddFormation(this.Forma).subscribe(() => {
        this.dialogRef.close();
      }); 
    }
       
    }

callParent(){

//  this.GreenEvent.emit(this.Forma.nomFomrmation)
console.log("name", this.Forma.nomFomrmation);

}

  
}
