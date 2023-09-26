import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EtudiantService } from '../../etudiant/service/etudiant.service'
import { EtudiantAddComponent } from './../etudiant-add/etudiant-add.component';
import { Etudiant } from './../../model/Etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  listeEtudiant
  searchvalue;
  childdatarecived : string ="";


  constructor(private etudiantService:EtudiantService, public dialog: MatDialog,private route:Router) { }

  ngOnInit(): void {
    this.getAlletud();;

  }

  openDialog(etudiant: Etudiant) {
    const dialogRef = this.dialog.open(EtudiantAddComponent, {
      width: '600px',
      data: etudiant
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAlletud();
    });
  }

  getAlletud(){
    this.etudiantService.GetAllEtudiant().subscribe(res => this.listeEtudiant = res)
    
  }
  
  deleteEtudiant(idEtudiant : any){
    if(confirm("vous etes sur"))
    this.etudiantService.deleteEtudiant(idEtudiant).subscribe(() => this.getAlletud())
  }

  GetEtudiantByID(idEtudiant : any){

    this.etudiantService.GetAllEtudiantById(idEtudiant).subscribe(() => this.getAlletud())

  }

  onsearch(){
    this.etudiantService.searchh(this.searchvalue).subscribe(
      (data) => {
        if ( this.searchvalue != null) {
          this.listeEtudiant = data;
        }
        

      },
      () => this.getAlletud()
      
    );
  }

  Trierr()
  {

    this.etudiantService.Trier().subscribe(res => this.listeEtudiant = res)
  }
  
  // goToDetail(id:any){
  //   this.route.navigate(['detail/'+id])
  // }
  getColor(opt) { (2)
    switch (opt) {
      case 'Gamix':
        return 'red';
      case 'SE':
        return 'blue';
      case 'SIM':
        return 'indianred';
        case 'NIDS':
          return 'crimson';
    
    }
  }

  Recivedata(event:string)
  {
console.log(event)
this.childdatarecived = event

  }

}
