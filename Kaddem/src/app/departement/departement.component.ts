import { Component, OnInit } from '@angular/core';
import { Departement } from './../model/Departement';
import { DepartementService } from './../Service/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

   listdepartement : any; 
   form : boolean = false;
   departement!: Departement;

  constructor( private departementService:DepartementService) { }



  ngOnInit(): void { this.GetAllDepart();;
  }

  GetAllDepart(){
this.departementService.GetAllDepartement().subscribe(res => this.listdepartement = res)

  }

  
  editdepartement(et : Departement){
    this.departementService.editDepartement(et).subscribe();
  }
  deletedepartement(id : any){
    this.departementService.deleteDepartement(id).subscribe(() => this.GetAllDepart())
  }

}
