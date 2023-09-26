import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'app/model/Universite';
import { UniversiteService } from 'app/Service/universite.service';

@Component({
  selector: 'app-modify-university',
  templateUrl: './modify-university.component.html',
  styleUrls: ['./modify-university.component.css']
})
export class ModifyUniversityComponent implements OnInit {
  Univ:Universite;
  updateUniversite= new FormGroup({
    nomUniv: new FormControl('',Validators.required),
    numTelUniv:new FormControl('',Validators.required),
    emailUniv:new FormControl('',Validators.required),
    adresseUniv:new FormControl('',Validators.required)
  })
  constructor(private universiteservice:UniversiteService , private router :Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.universiteservice.GetUniversiteById(this.route.snapshot.params.id).subscribe((result:any)=>
    {this.updateUniversite= new FormGroup({
      nomUniv: new FormControl(result['nomUniv']),
      numTelUniv:new FormControl(result['numTelUniv']),
      emailUniv:new FormControl(result['emailUniv']),
      adresseUniv:new FormControl(result['adresseUniv'])
    })})


  }

  editUniv(Univ : Universite , idUniversite:any){
    this.universiteservice.editUniversite(Univ,this.route.snapshot.params.id).subscribe(data => {
      window.alert('Your university has been modified !');
    this.router.navigate(['/home/university'])
    });

  }

  GetUniversityByID(idUniversite: any){

    this.universiteservice.GetUniversiteById(idUniversite).subscribe();
  
  }

 

}
