import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {


  readonly API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }


  GetAllUniversite()
  {
      return this.httpClient.get<[]>(`${this.API_URL}/UniversiteC/`);
  }

AddUniversite(Universite:any)
{

  return this.httpClient.post(`${this.API_URL}/UniversiteC/addUniversite`,Universite);
  
}

editUniversite(Universite:any,idUniversite:any)
{
  return this.httpClient.put(`${this.API_URL}/UniversiteC/updateUniversite/${idUniversite}`,Universite)

}

deleteUniversite(id : any)
{return this.httpClient.delete(`${this.API_URL}/UniversiteC/deleteUniversite/${id}`)}


GetUniversiteById(id : any)
  {
      return this.httpClient.get(`${this.API_URL}/UniversiteC/UniversiteById/${id}`);
  }

GetDepartements(id:any)
{
  return this.httpClient.get(`${this.API_URL}/UniversiteC/retrieveDepartementsByUniversite/${id}`);
}

GetEvents(id:any)
{
  return this.httpClient.get(`${this.API_URL}/UniversiteC/retrieveDEventsByUniversite/${id}`);
}


}
