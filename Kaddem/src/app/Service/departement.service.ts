import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {


  constructor(private httpClient: HttpClient) { }



  GetAllDepartement()
  {
      return this.httpClient.get<any[]>(`${environment.API_URL}/DepartementC/departements`);
  }

  editDepartement(depar:any)
{
  return this.httpClient.put(`${environment.API_URL}/DepartementC/updateDepartement`,depar)

}

deleteDepartement(idd : any)
{return this.httpClient.delete(`${environment.API_URL}/DepartementC/deleteDepartement/${idd}`)}












}
