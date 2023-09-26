import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from './../Service/formation.service';

@Component({
  selector: 'app-deatailformation',
  templateUrl: './deatailformation.component.html',
  styleUrls: ['./deatailformation.component.css']
})
export class DeatailformationComponent implements OnInit {


  @Input()singleEtudiant:any;
formation;

nomFomrmation;
lieu;
datedebut;
datefin;
sujet;
description;



  constructor(private activatedRoute: ActivatedRoute, private formationservice:FormationService ) { }

  ngOnInit(): void {


    this
    .formationservice
    .GetAllFormationById
    (this.activatedRoute.snapshot.params['id'])
    .subscribe(
      (      data): void => {
        this.formation = data;
        console.log(this.formation);
        this.nomFomrmation = this.formation.nomFomrmation;
        this.lieu = this.formation.lieu;
        this.datedebut = this.formation.datedebut;
        this.datefin = this.formation.datefin;
        this.sujet = this.formation.sujet;
        this.description = this.formation.description;
      


        console.log("chfamaa",this.formation.ididformation)

      }, error => {

        console.log(error);
        alert('id not found');
      }
    )
  ;
  }

}
