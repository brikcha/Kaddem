import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  readonly API_URL = 'http://localhost:8088/SpringMVC';

  constructor(private httpClient: HttpClient)

  {}

  GetAllEtudiant()
  {
      return this.httpClient.get(`${this.API_URL}/EtudiantC/`);
  }

AddEtudiant(etudiant:any)
{

  return this.httpClient.post(`${this.API_URL}/EtudiantC/addEtudiant`,etudiant)
}

editEtudiant(etud:any)
{
  return this.httpClient.put(`${this.API_URL}/EtudiantC/updateEtudiant`,etud)

}

deleteEtudiant(idEtudiant : any)
{return this.httpClient.delete(`${this.API_URL}/EtudiantC/deleteEtudiant/${idEtudiant}`)}

}

