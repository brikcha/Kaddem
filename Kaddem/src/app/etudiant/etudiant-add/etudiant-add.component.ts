import { Component, Inject, OnInit , Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from './../service/etudiant.service';
import { DepartementService } from './../../departement/Service/departement.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent implements OnInit {

reactiveForm: FormGroup;
departement: any[] = [];

childata : String ="data from child to parent ";
@Output() childStringdata : EventEmitter<String> =new EventEmitter();


  constructor(private etudiantService:EtudiantService ,private fb:FormBuilder, private departementService:DepartementService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EtudiantAddComponent>) { 

    this.reactiveForm=this.fb.group({
  
      username:['',[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3)]],
      email:['',[Validators.required,Validators.minLength(3)]],
      departement:[],
      opt:['']
    });

  
  }

  

  ngOnInit(): void {
    this.departementService.GetAllDepartement()
    .subscribe(
      (data) => {
        this.departement = data;
         
        if(this.data) {
          this.reactiveForm.get("username").setValue(this.data.username);
          this.reactiveForm.get("email").setValue(this.data.email);
          this.reactiveForm.get("departement").setValue(this.data.departement.idDepart);
          this.reactiveForm.get("opt").setValue(this.data.opt);
        }
     
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }


  
  submit (){
    const ddat = {
      username: this.reactiveForm.get('username').value,
      email:this.reactiveForm.get('email').value,
      opt:this.reactiveForm.get('opt').value
    }

    if (this.data) {
      ddat["id"]=this.data.id;
      this.etudiantService.editEtudiantt(ddat,this.reactiveForm.get('departement').value).subscribe((data) => {
       this.dialogRef.close()
      }); 
    } else {
      this.etudiantService.AddEtudiantt(ddat,this.reactiveForm.get('departement').value).subscribe((data) => {
       this.dialogRef.close();
       this.childStringdata.emit(this.childata);
      }); 
    }

    }


  
  get etatinput(){

    return this.reactiveForm.controls
    }


    get username(){
      return this.reactiveForm.get('username')
    }
    
    get email(){
      return this.reactiveForm.get('email')
    }


    

}
