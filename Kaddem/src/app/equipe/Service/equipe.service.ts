import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Equipe } from './../../model/Equipe';
import {DetailEq} from '../../model/DetailEq';

@Injectable()
export class EquipeService {

  public url= environment. API_URL+'/Equipe'

  constructor(private httpClient: HttpClient) { }



  GetAllEquipe(params)
  {
    return this.httpClient.get(`${this.url}/equipe`,{params});
  }


  AddEquipe(equipe:any)
  {
    return this.httpClient.post(`${this.url}/add-equipe`,equipe)
  }



  editEquipe(equipe:Equipe, id:number)
  {
    return this.httpClient.put(`${this.url}/modify-equipe/${id}`,equipe)

  }

  deleteEquipe(ide : any)
  {return this.httpClient.delete(`${this.url}/deleteEquipe/${ide}`)}



  addDetails(details:DetailEq,id:number) {

    return this.httpClient.put(`${this.url}/addDetails/${id}`,details)
  }

searchByNameEquipe(request, search){
    const params = request;
    const nomEquipe = search;
    return this.httpClient.get(this.url+'/search/'+nomEquipe, {params})
}









}
