import { Component, OnInit } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormationAddComponent } from './../formation-add/formation-add.component';
import { Formation } from './../../model/Formation';
import { TokenStorageService } from './../../login/services/token-storage.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

listeFormation;
classename1 ='one';
classename2 ='two';

  userRole = null;

  constructor(private formationservice:FormationService, public dialog: MatDialog,private route:Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.userRole = this.tokenStorage.getUser().roles[0];
    this.getallFormation();
  }

  openDialog(formation: Formation) {
    const dialogRef = this.dialog.open(FormationAddComponent, {
      width: '600px',
      data: formation
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getallFormation();
    });
  }

  getallFormation(){
    this.formationservice.GetAllFormation().subscribe(res => this.listeFormation = res)
    
  }
  
  deleteEtudiant(id : any){
    if(confirm("vous etes sur"))
    this.formationservice.deleteFormation(id).subscribe(() => this.getallFormation())
  }

  GetEtudiantByID(id : any){

    this.formationservice.GetAllFormationById(id).subscribe(() => this.getallFormation())

  }

  // onsearch(){
  //   this.formationservice.searchh(this.searchvalue).subscribe(
  //     (data) => {
  //       if ( this.searchvalue != null) {
  //         this.listeFormation = data;
  //       }
        

  //     },
  //     () => this.getAlletud()
      
  //   );
  // }

  // Trierr()
  // {

  //   this.formationservice.Trier().subscribe(res => this.listeEtudiant = res)
  // }
  
  // goToDetail(id:any){
  //   this.route.navigate(['detail/'+id])
  // }

  addItem(name :String){
  console.log('une nouvelle formation est ajoutée',name  )

  }

}
