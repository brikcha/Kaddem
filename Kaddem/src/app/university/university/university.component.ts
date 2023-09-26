import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DepartementService } from 'app/departement/Service/departement.service';
import { EventService } from 'app/event/services/event.service';
import { Universite } from 'app/model/Universite';
import { UniversiteService } from 'app/Service/universite.service';
import { TokenStorageService } from './../../login/services/token-storage.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})

export class UniversityComponent implements OnInit {
  idUniversite : any
  listUniversities : any ;
  univFilter:string;
  departementList:any;
  eventList:any;
  pageSlice:any
  userRole = null;

  public _universityFilter:string='';
  public _affectUniv:string='';
  public _affectUnivv:string='';
  public _affectDept:string='';
  public _affectEvent:string='';
  public filteredUniversities :any;


  constructor(private universiteservice : UniversiteService ,private route : Router , private ac : ActivatedRoute, private tokenStorage: TokenStorageService,private departementservice:DepartementService,private eventservice:EventService) { }


  ngOnInit(): void {
    this.userRole = this.tokenStorage.getUser().roles[0];
    this.getAllUniversities();
    this.filteredUniversities=this.listUniversities;

    this.departementservice.GetAllDepartement().subscribe(data=>this.departementList = data);
    this.eventservice.GetAllEvents().subscribe(data=>this.eventList = data);

  }

  getAllUniversities(){
    this.universiteservice.GetAllUniversite().subscribe(res => this.listUniversities = res);
  }

  getAllDepartements(id:any){
    
    this.universiteservice.GetDepartements(id).subscribe(res => this.departementList = res);
  }

  getAllEvents(id:any){
    
    this.universiteservice.GetEvents(id).subscribe(res => this.eventList = res);
  }

  delete(i:any){
    this.listUniversities.splice(i,1);
  }

  deleteUniv( idUniversite : any , i:any){
    this.idUniversite=this.ac.snapshot.params['idUniversite'];
    this.universiteservice.deleteUniversite(idUniversite).subscribe();
    window.alert('Your university has been deleted !');
    this.delete(i);
  } 


  GetUniversityByID(idUniversite: any){

    this.universiteservice.GetUniversiteById(idUniversite).subscribe();

  }




    public get universityFilter():string{
      return this._universityFilter;
    }

    public set universityFilter(filter:string){
      this._universityFilter = filter;
      this.filteredUniversities = this.universityFilter ? this.filterUniversity(this.universityFilter) : this.listUniversities;
    }

    public get affectUniv():string{
      return this._affectUniv;
    }

    public set affectUniv(filterr:string){
      this._affectUniv = filterr;

    }

    public get affectUnivv():string{
      return this._affectUnivv;
    }

    public set affectUnivv(filteer:string){
      this._affectUnivv = filteer;

    }


    public get affectDept():string{
      return this._affectDept;
    }

    public set affectDept(filtter:string){
      this._affectDept = filtter;

    }


    public get affectEvent():string{
      return this._affectEvent;
    }

    public set affectEvent(fillter:string){
      this._affectEvent = fillter;

    }

    public filterUniversity(criteria:string): Universite[]{
      criteria = criteria.toLowerCase();
      if (criteria==''){this.ngOnInit();}
      else{
      this.listUniversities = this.listUniversities.filter(
        (Universite : Universite) => Universite.nomUniv.toLowerCase().match(criteria))
      ;
      return this.listUniversities;
    }
    }




}
