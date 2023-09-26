import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Equipe } from './../../model/Equipe';
import {DetailEq} from '../../model/DetailEq';

@Injectable()
export class DetailEquipeService {

  public url= environment. API_URL+'/DetailEquipeC'

  constructor(private httpClient: HttpClient) { }



  GetAllDetailEquipe()
  {
      return this.httpClient.get(`${this.url}/detailequipes`);
  }


  AddDetailEquipe(detail:any)
  {
    return this.httpClient.post(`${this.url}/addDeailEquipe`,detail)
  }



  editDetailEquipe(detail:DetailEq, id:number)
  {
    return this.httpClient.put(`${this.url}/update/${id}`,detail)

  }

deleteDetailEquipe(idd : any)
{return this.httpClient.delete(`${this.url}/deleteDetailEquipe/${idd}`)}















}
