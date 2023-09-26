import { Component, OnInit } from '@angular/core';
import { EtudiantService } from './../Service/etudiant.service';
import { Etudiant } from './../model/Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {


  listEtudiants : any; 
  form : boolean = false;
   etud!: any;
   closeResult! : string;
  

 

  constructor( private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    this.getAlletud();;
    this.etud = {
      idEtudiant: null,
      prenomE: "",
      nomE: ""
  }
  }

  getAlletud(){
    this.etudiantService.GetAllEtudiant().subscribe(res => this.listEtudiants = res)
  }
  
  addEtudiant(p: any){
    this.etudiantService.AddEtudiant(p).subscribe(() => {
      this.getAlletud();
      this.form = false;
    });
  }

  editEtudiant(et : Etudiant){
    this.etudiantService.editEtudiant(et).subscribe();
  }
  deleteEtudiant(idEtudiant : any){
    this.etudiantService.deleteEtudiant(idEtudiant).subscribe(() => this.getAlletud())
  }

}
