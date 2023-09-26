import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../../etudiant/service/etudiant.service';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements OnInit {


  @Input()singleEtudiant:any;
etudiant;
username;
email;

  constructor(private activatedRoute: ActivatedRoute ,private etudiantservice:EtudiantService) { }

  ngOnInit(): void {
    

    this
    .etudiantservice
    .GetAllEtudiantById
    (this.activatedRoute.snapshot.params['id'])
    .subscribe(
      (      data): void => {
        this.etudiant = data;
        console.log(this.etudiant);
        this.username = this.etudiant.username;
        this.email = this.etudiant.email;


        console.log("chfamaa",this.etudiant.idEtudiant)

      }, error => {

        console.log(error);
        alert('id not found');
      }
    )
  ;

  
  }

}
